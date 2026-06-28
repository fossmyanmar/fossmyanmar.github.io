(function () {
  'use strict';

  var repoUrl = 'https://github.com/htooayelwinict/Agentic-AI-Book';
  var rawRepoBase = 'https://raw.githubusercontent.com/htooayelwinict/Agentic-AI-Book/main/';
  var rawChapterBase = rawRepoBase + 'book/chapters/';
  var blobRepoBase = repoUrl + '/blob/main/';
  var blobChapterBase = blobRepoBase + 'book/chapters/';

  /*
   * Developer security note:
   * Chapter Markdown is fetched from an allowlisted GitHub raw source and must
   * still be treated as untrusted content. Keep raw HTML escaped, keep DOM
   * sanitization before insertion, keep credentials omitted from fetch, and keep
   * external links isolated with noopener/noreferrer. These controls map to the
   * OWASP risks discussed during implementation without showing reader-facing
   * security copy in the article.
   */
  var chapters = [
    ['00 License', '00-license.md'],
    ['00 Preface', '00-preface.md'],
    ['00 Thank You Note', '00-thankyou_note.md'],
    ['01 Agentic AI Basics', '01-agentic-ai-basics.md'],
    ['02 Agent vs Workflow vs Automation', '02-agent-vs-workflow-vs-automation.md'],
    ['03 LLM Tool Calling / Function Calling', '03-llm-tool-calling-function-calling.md'],
    ['04 Agent Loop', '04-agent-loop.md'],
    ['05 Agent Harness', '05-agent-harness.md'],
    ['06 MCP, Skill, Subagent', '06-mcp-skill-subagent.md'],
    ['07 Context Engineering, Memory, RAG', '07-context-engineering-memory-rag.md'],
    ['08 Planner, Worker, Verifier', '08-planner-worker-verifier.md'],
    ['09 Tool Broker, Permission, Mutation Scope', '09-tool-broker-permission-mutation-scope.md'],
    ['10 Observability, Trajectory, Reflection', '10-observability-trajectory-reflection.md'],
    ['11 Safety, Sandbox, Prompt Injection, Tool Output', '11-safety-sandbox-prompt-injection-tool-output.md'],
    ['12 P-2 Zero-Trust Multi-Agent Bridge', '12-p2-zero-trust-multi-agent-bridge.md'],
    ['13 Travis-2 Controlled Runtime', '13-travis2-controlled-runtime.md'],
    ['14 BrowserSurfer Browser Tool Agent Security', '14-browsersurfer-browser-tool-agent-security.md'],
    ['15 appv22 Emerging Runtime Recovery Lab', '15-appv22-emerging-runtime-recovery-lab.md'],
    ['16 DevOps Agent Thinking', '16-devops-agent-thinking.md'],
    ['17 Mini Labs', '17-mini-labs.md'],
    ['18 Myanmar Developer Roadmap', '18-myanmar-developer-roadmap.md'],
    ['19 References', '19-references.md']
  ].map(function (entry) {
    return {
      title: entry[0],
      path: entry[1],
      rawUrl: rawChapterBase + entry[1],
      githubUrl: blobChapterBase + entry[1]
    };
  });

  var allowedPaths = chapters.reduce(function (set, chapter) {
    set[chapter.path] = true;
    return set;
  }, {});

  var currentIndex = 1;
  var ids = {
    list: 'agenticBookChapterList',
    title: 'agenticBookChapterTitle',
    body: 'agenticBookChapterBody',
    status: 'agenticBookStatus',
    source: 'agenticBookSourceLink',
    previous: 'agenticBookPrevious',
    next: 'agenticBookNext'
  };

  function byId(id) {
    return document.getElementById(id);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[char];
    });
  }

  function isRelativeUrl(url) {
    return !/^[a-z][a-z0-9+.-]*:/i.test(url) && url.indexOf('//') !== 0;
  }

  function resolveRepoUrl(url, baseUrl, outputBase) {
    var resolved;
    try {
      resolved = new URL(url, baseUrl);
    } catch (error) {
      return '';
    }
    if (resolved.href.indexOf(outputBase) !== 0) {
      return '';
    }
    return resolved.href;
  }

  function safeUrl(url, isImage, context) {
    var trimmed = String(url || '').trim();
    var baseUrl = context && context.rawUrl ? context.rawUrl : rawChapterBase;
    if (!trimmed) {
      return '';
    }
    if (isImage && /^https:\/\//i.test(trimmed)) {
      return trimmed.indexOf(rawRepoBase) === 0 ? trimmed : '';
    }
    if (!isImage && /^https:\/\//i.test(trimmed)) {
      return trimmed;
    }
    if (!isImage && /^#[A-Za-z0-9_-]+$/.test(trimmed)) {
      return trimmed;
    }
    if (isRelativeUrl(trimmed)) {
      if (isImage) {
        return resolveRepoUrl(trimmed, baseUrl, rawRepoBase);
      }
      return resolveRepoUrl(trimmed, context && context.githubUrl ? context.githubUrl : blobChapterBase, blobRepoBase);
    }
    return '';
  }

  function renderInline(text, context) {
    var codeSpans = [];
    var out = escapeHtml(text);
    out = out.replace(/`([^`]+)`/g, function (_, code) {
      var token = 'AGENTIC_CODE_SPAN_' + codeSpans.length + '_TOKEN';
      codeSpans.push('<code>' + code + '</code>');
      return token;
    });
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    out = out.replace(/!\[([^\]]*)\]\(([^\s)]+)(?:\s+&quot;[^&]+&quot;)?\)/g, function (_, alt, href) {
      var safe = safeUrl(href, true, context);
      if (!safe) {
        return alt;
      }
      return '<img src="' + escapeHtml(safe) + '" alt="' + alt + '">';
    });
    out = out.replace(/\[([^\]]+)\]\(([^\s)]+)(?:\s+&quot;[^&]+&quot;)?\)/g, function (_, label, href) {
      var safe = safeUrl(href, false, context);
      if (!safe) {
        return label;
      }
      return '<a href="' + escapeHtml(safe) + '">' + label + '</a>';
    });
    out = out.replace(/AGENTIC_CODE_SPAN_(\d+)_TOKEN/g, function (_, index) {
      return codeSpans[Number(index)] || '';
    });
    return out;
  }

  function markdownToHtml(markdown, context) {
    var lines = String(markdown || '').replace(/\r\n/g, '\n').split('\n');
    var html = [];
    var paragraph = [];
    var listOpen = false;
    var quoteOpen = false;
    var codeOpen = false;
    var table = [];

    function flushParagraph() {
      if (paragraph.length) {
        html.push('<p>' + renderInline(paragraph.join(' '), context) + '</p>');
        paragraph = [];
      }
    }

    function closeList() {
      if (listOpen) {
        html.push('</ul>');
        listOpen = false;
      }
    }

    function closeQuote() {
      if (quoteOpen) {
        html.push('</blockquote>');
        quoteOpen = false;
      }
    }

    function flushTable() {
      var rows;
      var separator;
      if (!table.length) {
        return;
      }
      if (table.length < 2) {
        table.forEach(function (line) {
          paragraph.push(line);
        });
        table = [];
        return;
      }
      rows = table.map(function (line) {
        return line.trim().replace(/^\||\|$/g, '').split('|').map(function (cell) {
          return renderInline(cell.trim(), context);
        });
      });
      separator = rows[1].every(function (cell) {
        return /^:?-{3,}:?$/.test(cell.replace(/<[^>]+>/g, ''));
      });
      if (!separator) {
        table.forEach(function (line) {
          paragraph.push(line);
        });
        table = [];
        return;
      }
      html.push('<table><thead><tr>' + rows[0].map(function (cell) {
        return '<th>' + cell + '</th>';
      }).join('') + '</tr></thead><tbody>');
      rows.slice(2).forEach(function (row) {
        html.push('<tr>' + row.map(function (cell) {
          return '<td>' + cell + '</td>';
        }).join('') + '</tr>');
      });
      html.push('</tbody></table>');
      table = [];
    }

    lines.forEach(function (line) {
      var heading;
      var item;
      var quote;
      if (/^```/.test(line)) {
        flushParagraph();
        closeList();
        closeQuote();
        flushTable();
        if (codeOpen) {
          html.push('</code></pre>');
          codeOpen = false;
        } else {
          html.push('<pre><code>');
          codeOpen = true;
        }
        return;
      }
      if (codeOpen) {
        html.push(escapeHtml(line));
        return;
      }
      if (/^\s*$/.test(line)) {
        flushParagraph();
        closeList();
        closeQuote();
        flushTable();
        return;
      }
      if (/^\|.+\|\s*$/.test(line)) {
        flushParagraph();
        closeList();
        closeQuote();
        table.push(line);
        return;
      }
      flushTable();
      heading = line.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        flushParagraph();
        closeList();
        closeQuote();
        html.push('<h' + heading[1].length + '>' + renderInline(heading[2], context) + '</h' + heading[1].length + '>');
        return;
      }
      if (/^---+$/.test(line.trim())) {
        flushParagraph();
        closeList();
        closeQuote();
        html.push('<hr>');
        return;
      }
      item = line.match(/^\s*[-*]\s+(.+)$/);
      if (item) {
        flushParagraph();
        closeQuote();
        if (!listOpen) {
          html.push('<ul>');
          listOpen = true;
        }
        html.push('<li>' + renderInline(item[1], context) + '</li>');
        return;
      }
      quote = line.match(/^>\s?(.*)$/);
      if (quote) {
        flushParagraph();
        closeList();
        if (!quoteOpen) {
          html.push('<blockquote>');
          quoteOpen = true;
        }
        html.push('<p>' + renderInline(quote[1], context) + '</p>');
        return;
      }
      paragraph.push(line.trim());
    });

    flushParagraph();
    closeList();
    closeQuote();
    flushTable();
    if (codeOpen) {
      html.push('</code></pre>');
    }
    return html.join('\n');
  }

  function sanitizeHtml(html) {
    var template = document.createElement('template');
    var allowedTags = {
      A: true, P: true, BR: true, HR: true,
      H1: true, H2: true, H3: true, H4: true, H5: true, H6: true,
      UL: true, OL: true, LI: true,
      STRONG: true, EM: true, CODE: true, PRE: true,
      BLOCKQUOTE: true,
      TABLE: true, THEAD: true, TBODY: true, TR: true, TH: true, TD: true,
      IMG: true
    };
    var allowedAttrs = { href: true, src: true, alt: true, title: true, class: true };
    var walker;
    var remove = [];

    template.innerHTML = html;
    walker = document.createTreeWalker(template.content, NodeFilter.SHOW_ELEMENT);
    while (walker.nextNode()) {
      var el = walker.currentNode;
      Array.prototype.slice.call(el.attributes).forEach(function (attr) {
        var name = attr.name.toLowerCase();
        var value = attr.value.trim();
        if (name.indexOf('on') === 0 || !allowedAttrs[name]) {
          el.removeAttribute(attr.name);
          return;
        }
        if ((name === 'href' || name === 'src') && !safeUrl(value, name === 'src')) {
          el.removeAttribute(attr.name);
        }
      });
      if (!allowedTags[el.tagName]) {
        remove.push(el);
        continue;
      }
      if (el.tagName === 'A') {
        if (/^#[A-Za-z0-9_-]+$/.test(el.getAttribute('href') || '')) {
          el.removeAttribute('target');
          el.removeAttribute('rel');
        } else {
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
        }
      }
      if (el.tagName === 'IMG' && !el.getAttribute('alt')) {
        el.setAttribute('alt', '');
      }
    }
    remove.forEach(function (el) {
      el.replaceWith(document.createTextNode(el.textContent || ''));
    });
    return template.innerHTML;
  }

  function setButtons() {
    var list = byId(ids.list);
    var previous = byId(ids.previous);
    var next = byId(ids.next);
    if (previous) {
      previous.disabled = currentIndex <= 0;
    }
    if (next) {
      next.disabled = currentIndex >= chapters.length - 1;
    }
    if (list) {
      Array.prototype.slice.call(list.querySelectorAll('button')).forEach(function (button, index) {
        button.className = index === currentIndex ? 'agentic-book-toc-item active' : 'agentic-book-toc-item';
      });
    }
  }

  function showError(chapter, message) {
    var body = byId(ids.body);
    var status = byId(ids.status);
    if (status) {
      status.textContent = 'Fetch failed';
    }
    if (body) {
      body.innerHTML = '<div class="agentic-book-error"><p>ဒီ chapter ကို browser မှ fetch မလုပ်နိုင်ပါ။</p><p><a href="' + escapeHtml(chapter.githubUrl) + '" target="_blank" rel="noopener noreferrer">Read this chapter on GitHub</a></p><p><code>' + escapeHtml(message) + '</code></p></div>';
    }
  }

  function loadChapter(index) {
    var chapter;
    var title = byId(ids.title);
    var status = byId(ids.status);
    var body = byId(ids.body);
    var source = byId(ids.source);

    currentIndex = Math.max(0, Math.min(index, chapters.length - 1));
    chapter = chapters[currentIndex];
    if (!allowedPaths[chapter.path]) {
      return;
    }

    if (title) {
      title.textContent = chapter.title;
    }
    if (source) {
      source.href = chapter.githubUrl;
    }
    if (status) {
      status.textContent = 'Loading from GitHub raw source...';
    }
    if (body) {
      body.innerHTML = '<p>ခဏစောင့်ပါ။ Chapter ကို GitHub မှ fetch လုပ်နေသည်။</p>';
    }
    setButtons();

    fetch(chapter.rawUrl, { cache: 'no-store', mode: 'cors', credentials: 'omit' })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('HTTP ' + response.status);
        }
        return response.text();
      })
      .then(function (markdown) {
        if (body) {
          body.innerHTML = sanitizeHtml(markdownToHtml(markdown, chapter));
        }
        if (status) {
          status.textContent = 'Loaded securely from allowlisted source';
        }
      })
      .catch(function (error) {
        showError(chapter, error.message);
      });
  }

  function init() {
    var list = byId(ids.list);
    var previous = byId(ids.previous);
    var next = byId(ids.next);
    if (!list || !byId(ids.body)) {
      return;
    }

    chapters.forEach(function (chapter, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'agentic-book-toc-item';
      button.textContent = chapter.title;
      button.addEventListener('click', function () {
        loadChapter(index);
      });
      list.appendChild(button);
    });

    if (previous) {
      previous.addEventListener('click', function () {
        loadChapter(currentIndex - 1);
      });
    }
    if (next) {
      next.addEventListener('click', function () {
        loadChapter(currentIndex + 1);
      });
    }

    loadChapter(currentIndex);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
