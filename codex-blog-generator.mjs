import { setupBrowserRuntime } from "file:///C:/Users/sy/.codex/plugins/cache/openai-bundled/browser/26.601.21317/scripts/browser-client.mjs";
import { writeFile } from "node:fs/promises";

// 设置浏览器运行时
await setupBrowserRuntime({ globals: globalThis });
globalThis.browser = await agent.browsers.get("iab");

// 要读取的文章列表
const articles = [
  "https://mp.weixin.qq.com/s/WeT6zlAMVhrcSKYzCdCddQ?scene=1&click_id=1365537140",
  "https://mp.weixin.qq.com/s/5kgVdLNABViv8uAnD0M6Ag?scene=1&click_id=1524160717"
];

// 创建新标签页
const tab = await browser.tabs.new();

// 提取文章内容
const articlesContent = [];

for (const url of articles) {
  try {
    await tab.goto(url);
    await tab.playwright.waitForLoadState({ state: "domcontentloaded" });
    
    // 获取页面内容
    const content = await tab.playwright.evaluate(() => {
      // 获取文章标题
      const title = document.querySelector("#activity-name")?.textContent?.trim() || 
                    document.querySelector(".rich_media_title")?.textContent?.trim() || 
                    "未知标题";
      
      // 获取作者
      const author = document.querySelector("#js_name")?.textContent?.trim() || 
                     document.querySelector(".rich_media_meta_text")?.textContent?.trim() || 
                     "未知作者";
      
      // 获取发布时间
      const publishTime = document.querySelector("#publish_time")?.textContent?.trim() || 
                          "未知时间";
      
      // 获取正文内容
      const contentElement = document.querySelector("#js_content") || 
                             document.querySelector(".rich_media_content");
      const content = contentElement ? contentElement.innerText : "无法获取内容";
      
      return { title, author, publishTime, content };
    });
    
    articlesContent.push({ url, ...content });
    console.log(`成功读取: ${content.title}`);
    
  } catch (error) {
    console.error(`读取失败 ${url}:`, error.message);
    articlesContent.push({ url, error: error.message });
  }
}

// 保存提取的内容到文件
const outputPath = "D:/data/obsidian/first/articles-content.json";
await writeFile(outputPath, JSON.stringify(articlesContent, null, 2), "utf-8");
console.log(`文章内容已保存到: ${outputPath}`);

// 输出结果
console.log("\n文章提取结果:");
articlesContent.forEach((article, index) => {
  console.log(`\n${index + 1}. ${article.title || "提取失败"}`);
  console.log(`   作者: ${article.author || "未知"}`);
  console.log(`   时间: ${article.publishTime || "未知"}`);
  if (article.error) {
    console.log(`   错误: ${article.error}`);
  }
});
import { setupBrowserRuntime } from "file:///C:/Users/sy/.codex/plugins/cache/openai-bundled/browser/26.601.21317/scripts/browser-client.mjs";
import { writeFile } from "node:fs/promises";

// 设置浏览器运行时
await setupBrowserRuntime({ globals: globalThis });
globalThis.browser = await agent.browsers.get("iab");

// 要读取的文章列表
const articles = [
  "https://mp.weixin.qq.com/s/WeT6zlAMVhrcSKYzCdCddQ?scene=1&click_id=1365537140",
  "https://mp.weixin.qq.com/s/5kgVdLNABViv8uAnD0M6Ag?scene=1&click_id=1524160717"
];

// 创建新标签页
const tab = await browser.tabs.new();

// 提取文章内容
const articlesContent = [];

for (const url of articles) {
  try {
    await tab.goto(url);
    await tab.playwright.waitForLoadState({ state: "domcontentloaded" });
    
    // 获取页面内容
    const content = await tab.playwright.evaluate(() => {
      // 获取文章标题
      const title = document.querySelector("#activity-name")?.textContent?.trim() || 
                    document.querySelector(".rich_media_title")?.textContent?.trim() || 
                    "未知标题";
      
      // 获取作者
      const author = document.querySelector("#js_name")?.textContent?.trim() || 
                     document.querySelector(".rich_media_meta_text")?.textContent?.trim() || 
                     "未知作者";
      
      // 获取发布时间
      const publishTime = document.querySelector("#publish_time")?.textContent?.trim() || 
                          "未知时间";
      
      // 获取正文内容
      const contentElement = document.querySelector("#js_content") || 
                             document.querySelector(".rich_media_content");
      const content = contentElement ? contentElement.innerText : "无法获取内容";
      
      return { title, author, publishTime, content };
    });
    
    articlesContent.push({ url, ...content });
    console.log(`成功读取: ${content.title}`);
    
  } catch (error) {
    console.error(`读取失败 ${url}:`, error.message);
    articlesContent.push({ url, error: error.message });
  }
}

// 保存提取的内容到文件
const outputPath = "D:/data/obsidian/first/articles-content.json";
await writeFile(outputPath, JSON.stringify(articlesContent, null, 2), "utf-8");
console.log(`文章内容已保存到: ${outputPath}`);

// 输出结果
console.log("\n文章提取结果:");
articlesContent.forEach((article, index) => {
  console.log(`\n${index + 1}. ${article.title || "提取失败"}`);
  console.log(`   作者: ${article.author || "未知"}`);
  console.log(`   时间: ${article.publishTime || "未知"}`);
  if (article.error) {
    console.log(`   错误: ${article.error}`);
  }
});
