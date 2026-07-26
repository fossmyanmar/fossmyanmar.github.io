(function () {
  'use strict';

  var repoUrl = 'https://github.com/htooayelwinict/Inside_the_Agent_Runtime';
  var rawRepoBase = 'https://raw.githubusercontent.com/htooayelwinict/Inside_the_Agent_Runtime/main/';
  var rawChapterBase = rawRepoBase + 'book/chapters/';
  var blobRepoBase = repoUrl + '/blob/main/';
  var blobChapterBase = blobRepoBase + 'book/chapters/';

  var chapters = [
    ['00 မိတ်ဆက် နှင့် Attribution', '00-preface-attribution.md'],
    ['00 ကျေးဇူးတင်စာ', '00-thankyou_note.md'],
    ['01 Pi နဲ့ Hermes ကို ဘာကြောင့်တွဲကြည့်ရတာလဲ', '01-why-pi-and-hermes.md'],
    ['02 Pi Agent Loop Anatomy', '02-pi-agent-loop-anatomy.md'],
    ['03 Agent Runtime Loop ကို အစအဆုံးဖတ်ခြင်း', '03-agent-runtime-loop-walkthrough.md'],
    ['04 TypeScript ကနေ Python သို့ Semantic Port', '04-typescript-to-python-semantic-port.md'],
    ['05 Tool Execution နှင့် Bounded Concurrency', '05-tool-execution-bounded-concurrency.md'],
    ['06 Context Window ပြည့်လာတဲ့ ပြဿနာ', '06-context-window-pressure.md'],
    ['07 Hermes-style Compaction', '07-hermes-style-compaction.md'],
    ['08 Pi နဲ့ Hermes တွေ့ဆုံရာ', '08-pi-meets-hermes.md'],
    ['09 Minimal Runtime Lab', '09-minimal-runtime-lab.md'],
    ['10 Parity, Divergence နှင့် သင်ခန်းစာများ', '10-parity-divergence-lessons.md'],
    ['11 တစ်ည နဲ့မပြီးတဲ့ Bug', '11-one-night-unfinished-bug.md'],
    ['12 Agent ကို လမ်းပြန်ညွှန်ရတဲ့အချိန်', '12-steering-followup-cancellation.md'],
    ['13 Tool က အမှားပြန်လာတဲ့အခါ', '13-when-tools-fail.md'],
    ['14 ပြန်ဖွင့်လိုက်တော့ အလုပ်ဘယ်ကဆက်မလဲ', '14-session-resume-after-restart.md'],
    ['15 Agent ရဲ့ လမ်းကြောင်းကို Trace နဲ့ Debug လုပ်ခြင်း', '15-debugging-agent-trajectory.md'],
    ['16 ယုံကြည်ရတဲ့ Python Port တစ်ခုဖန်တီးရန်', '16-building-a-trustworthy-port.md'],
    ['Appendix A — Installation', 'appendices/a-installation.md'],
    ['Appendix B — npm Docker Launcher', 'appendices/b-npm-docker-launcher.md'],
    ['Appendix C — Source Map', 'appendices/c-source-map.md'],
    ['Appendix D — Glossary နှင့် References', 'appendices/d-glossary-references.md']
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

  function isSafeHashUrl(url) {
    return /^#[A-Za-z0-9_-]+$/.test(url);
  }

  function isHttpsUrl(url) {
    return /^https:\/\//i.test(url);
  }

  function safeUrl(url, isImage, context) {
    var trimmed = String(url || '').trim();
    var baseUrl = context && context.rawUrl ? context.rawUrl : rawChapterBase;
    if (!trimmed) {
      return '';
    }
    if (trimmed.charAt(0) === '#') {
      return !isImage && isSafeHashUrl(trimmed) ? trimmed : '';
    }
    if (isImage && isHttpsUrl(trimmed)) {
      return trimmed.indexOf(rawRepoBase) === 0 ? trimmed : '';
    }
    if (!isImage && isHttpsUrl(trimmed)) {
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
    out = out.replace(/\*\*([^*]+)\*/g, '<strong>$1</strong>');
    out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    out = out.replace(/!\[([^\]]*)\]\(((?:[^\s()]+|\([^()]*\))*)(?:\s+&quot;[^&]+&quot;)?\)/g, function (_, alt, href) {
      var safe = safeUrl(href, true, context);
      if (!safe) {
        return alt;
      }
      return '<img src="' + escapeHtml(safe) + '" alt="' + alt + '">';
    });
    out = out.replace(/\[([^\]]+)\]\(((?:[^\s()]+|\([^()]*\))*)(?:\s+&quot;[^&]+&quot;)?\)/g, function (_, label, href) {
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
