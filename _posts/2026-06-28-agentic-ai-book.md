---
layout: post
title: "Agentic AI အခမဲ့လမ်းညွှန်ကို FOSS Myanmar မှ ဖတ်နိုင်ပါပြီ"
date: 2026-06-28 06:00:00 +0000
categories: AI OpenSource Education
---

<style>
.agentic-book-reader {
  margin: 24px 0;
  color: #1f2a27;
  font-family: Georgia, "Noto Serif Myanmar", "Myanmar MN", serif;
}
.agentic-book-hero {
  padding: 24px;
  border: 1px solid #d8e2d8;
  border-radius: 18px;
  background: linear-gradient(135deg, #fffdf7 0%, #eef8f0 100%);
}
.agentic-book-hero h2 {
  margin-top: 0;
  line-height: 1.35;
}
.agentic-book-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}
.agentic-book-button,
.agentic-book-actions a,
.agentic-book-toolbar a {
  display: inline-block;
  border: 1px solid #1f7a59;
  border-radius: 999px;
  padding: 8px 13px;
  color: #1f7a59;
  background: #ffffff;
  text-decoration: none;
  font-weight: 700;
}
.agentic-book-button {
  cursor: pointer;
}
.agentic-book-button:disabled {
  cursor: not-allowed;
  opacity: .45;
}
.agentic-book-layout {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
}
.agentic-book-toc,
.agentic-book-panel {
  border: 1px solid #d8e2d8;
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
}
.agentic-book-toc {
  position: sticky;
  top: 12px;
  max-height: calc(100vh - 24px);
  overflow: auto;
}
.agentic-book-toc h3,
.agentic-book-panel h3 {
  margin-top: 0;
}
.agentic-book-toc-item {
  width: 100%;
  display: block;
  text-align: left;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #1f2a27;
  padding: 8px 9px;
  margin: 2px 0;
  cursor: pointer;
  line-height: 1.35;
}
.agentic-book-toc-item:hover,
.agentic-book-toc-item.active {
  background: #edf7ef;
  color: #1f7a59;
}
.agentic-book-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 14px;
  margin-bottom: 18px;
  border-bottom: 1px solid #d8e2d8;
}
.agentic-book-status {
  margin: 0 0 4px;
  color: #64746f;
  font-size: 14px;
}
.agentic-book-title {
  margin: 0;
  line-height: 1.35;
}
.agentic-book-body h1,
.agentic-book-body h2,
.agentic-book-body h3 {
  line-height: 1.35;
}
.agentic-book-body pre {
  overflow: auto;
  padding: 12px;
  border-radius: 10px;
  background: #f1eadb;
}
.agentic-book-body code {
  background: #f1eadb;
  border-radius: 4px;
  padding: 1px 5px;
}
.agentic-book-body pre code {
  padding: 0;
  background: transparent;
}
.agentic-book-body blockquote {
  margin: 16px 0;
  padding: 10px 14px;
  border-left: 5px solid #1f7a59;
  border-radius: 10px;
  background: #eef8f0;
}
.agentic-book-body table {
  display: block;
  width: 100%;
  overflow: auto;
  border-collapse: collapse;
}
.agentic-book-body th,
.agentic-book-body td {
  border: 1px solid #d8e2d8;
  padding: 8px 10px;
}
.agentic-book-body img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
.agentic-book-error {
  padding: 12px 14px;
  border: 1px solid #e4a49a;
  border-radius: 10px;
  background: #fff0ed;
  color: #8d2b21;
}
@media (max-width: 820px) {
  .agentic-book-layout {
    grid-template-columns: 1fr;
  }
  .agentic-book-toc {
    position: static;
    max-height: none;
  }
}
</style>

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
