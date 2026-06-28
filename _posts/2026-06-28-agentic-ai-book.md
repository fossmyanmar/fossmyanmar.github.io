---
layout: post
title: "Agentic AI အခမဲ့လမ်းညွှန်ကို FOSS Myanmar မှ ဖတ်နိုင်ပါပြီ"
date: 2026-06-28 06:00:00 +0000
categories: AI OpenSource Education
---

<link rel="stylesheet" href="/css/agentic-book-reader.css">

<div class="agentic-book-reader">
  <section class="agentic-book-hero">
    <h2>Agentic AI ကို မြန်မာ Developer များအတွက် ဖတ်ရလွယ်အောင် စုစည်းထားသော အခမဲ့လမ်းညွှန်</h2>

    <p>
      Agentic AI ဆိုသောစကားလုံးသည် ယနေ့ခေတ်တွင် buzzword ဖြစ်လာသည်။ သို့သော် developer တစ်ယောက်အတွက် အရေးကြီးသည်မှာ hype ကိုလိုက်ရန်မဟုတ်။ Agent တစ်ခုက ဘာမြင်သလဲ၊ ဘာ tool သုံးခွင့်ရှိသလဲ၊ ဘယ်အချိန်ရပ်သလဲ၊ အမှားဖြစ်လျှင် ဘယ် trace ကိုကြည့်မလဲဆိုသော အင်ဂျင်နီယာမျက်စိရရန်ဖြစ်သည်။
    </p>

    <p>
      <strong>Agentic AI အခမဲ့လမ်းညွှန်</strong> သည် မြန်မာ Developer များအတွက် Agent, Tool Calling, Context Engineering, RAG, MCP, Sandbox, Coding Agent, DevOps Automation စသောအကြောင်းအရာများကို practical mental model အဖြစ်ရှင်းထားသော open-source book project ဖြစ်သည်။
    </p>

    <p>
      FOSS Myanmar စာဖတ်သူများအနေဖြင့် စာအုပ်ကို GitHub သို့မသွားဘဲ ဒီစာမျက်နှာပေါ်မှ chapter တစ်ခန်းချင်း ဖတ်နိုင်ရန် reader ကိုထည့်ထားသည်။ သို့သော် source of truth သည် စာအုပ် repository ထဲတွင်ပဲရှိသည်။ စာအုပ် update ဖြစ်လျှင် ဒီ reader က GitHub raw Markdown ကို ပြန်ဖတ်သောကြောင့် content ကို သီးခြား copy မလုပ်ထားပါ။
    </p>

    <div class="agentic-book-actions">
      <a href="https://github.com/htooayelwinict/Agentic-AI-Book" target="_blank" rel="noopener noreferrer">Book repository</a>
      <a href="https://github.com/htooayelwinict/Agentic-AI-Book/tree/main/book/chapters" target="_blank" rel="noopener noreferrer">Chapter source files</a>
    </div>
  </section>

  <section class="agentic-book-layout" aria-label="Agentic AI Book embedded reader">
    <nav class="agentic-book-toc" aria-label="Agentic AI Book chapters">
      <h3>မာတိကာ</h3>
      <div id="agenticBookChapterList"></div>
    </nav>

    <article class="agentic-book-panel">
      <div class="agentic-book-toolbar">
        <div>
          <p class="agentic-book-status" id="agenticBookStatus">Ready</p>
          <h3 class="agentic-book-title" id="agenticBookChapterTitle">Loading chapter</h3>
        </div>
        <div class="agentic-book-actions">
          <button class="agentic-book-button" id="agenticBookPrevious" type="button">Previous</button>
          <button class="agentic-book-button" id="agenticBookNext" type="button">Next</button>
          <a id="agenticBookSourceLink" href="https://github.com/htooayelwinict/Agentic-AI-Book" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
      <div class="agentic-book-body" id="agenticBookChapterBody">
        <p>ခဏစောင့်ပါ။ Chapter ကို GitHub မှ fetch လုပ်နေသည်။</p>
      </div>
    </article>
  </section>

  <p>
    ဤ reader သည် JavaScript မရသော browser တွင် မဖွင့်နိုင်ပါက စာအုပ် repository မှ တိုက်ရိုက်ဖတ်နိုင်သည်။
    <a href="https://github.com/htooayelwinict/Agentic-AI-Book" target="_blank" rel="noopener noreferrer">Agentic AI Book on GitHub</a>
  </p>
</div>

<script src="/js/agentic-book-reader.js"></script>
