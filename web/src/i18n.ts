import { reactive } from "vue";

export type Locale = "en" | "zh-CN";

const translations: Record<Locale, Record<string, string>> = {
  en: {},
  "zh-CN": {
    Homepage: "首页",
    Playground: "实验场",
    "Try now": "立即体验",
    "Get Valuable": "快速获取",
    "Insights": "有价值的洞察",
    Instantly: "洞察",
    "AI Drives Data-Driven AI": "AI 驱动数据智能",
    "The Framework of R&D-Agent": "R&D-Agent 框架",
    "Ready to experiment?": "准备好开始实验了吗？",
    "Dive into our Playground and set your creativity free!": "进入实验场，释放你的创造力！",
    "R&D-Agent is your dedicated data scientist powered by an LLM. It automatically researches your unique data-mining tasks, learns domain knowledge to evolve from practice, develops the most tailored datasets and models for your data sources, and delivers solutions with significant industrial value.":
      "R&D-Agent 是由大语言模型驱动的专属数据科学家。它能够自动研究独特的数据挖掘任务，学习领域知识并在实践中不断演进，为数据源开发最匹配的数据集和模型，交付具有显著产业价值的解决方案。",
    "Contact us": "联系我们",
    "Privacy & Cookies": "隐私和 Cookie",
    "Terms of Use": "使用条款",
    Trademarks: "商标",
    "Please enter password": "请输入密码",
    Enter: "进入",
    Start: "开始",
    "Pick a scenario": "选择场景",
    Summary: "摘要",
    "Let’s Get Started: Select Your Action": "开始使用：选择操作",
    "First time?": "第一次使用？",
    "Select a scenario for your analysis": "选择要分析的场景",
    "View previous traces?": "查看历史运行记录？",
    "Open a trace ID from an earlier run to review its history.": "打开之前运行的 Trace ID 以查看历史记录。",
    "Continuous Exploration": "持续探索",
    "Guided Implementation": "指导实现",
    "Upload materials you want to analyze": "上传要分析的材料",
    Scenario: "场景",
    Material: "材料",
    "Material (Optional)": "材料（可选）",
    "research reports, papers, etc.": "研究报告、论文等",
    "Upload one .pdf file": "上传一个 .pdf 文件",
    "Supported format: .pdf": "支持的格式：.pdf",
    "Upload base factors": "上传基础因子",
    "Loop count": "循环次数",
    "Trace ID List": "Trace ID 列表",
    "Pick a scenario first, then choose one of its trace names": "请先选择场景，再选择其中一个 Trace 名称",
    "Trace name": "Trace 名称",
    BACK: "返回",
    Research: "研究",
    Development: "开发",
    Feedback: "反馈",
    PROCESS: "流程",
    RESULT: "结果",
    "User Interaction Required": "需要用户交互",
    "R&D-Agent is generating hypothesis": "R&D-Agent 正在生成假设",
    Loops: "循环",
    "Successful Hypotheses": "成功的假设",
    Log: "日志",
    "All loop files": "所有循环文件",
    Metrics: "指标",
    Component: "组件",
    Status: "状态",
    Success: "成功",
    Failed: "失败",
    Hypothesis: "假设",
    Reason: "原因",
    Observation: "观察",
    Files: "文件",
    "Auto Skip Interaction": "自动跳过交互",
    "Increase Loop Count": "增加循环次数",
    "Add Loops": "增加循环",
    Implementation: "实现",
    Tasks: "任务",
    Configuration: "配置",
    "Returns Chart": "收益图表",
    "Variable": "变量",
    Value: "值",
    Introduction: "简介",
    "Data Description": "数据说明",
    "Evaluation Method": "评估方法",
    "Scenario Breakdown": "场景流程",
  },
};

const storedLocale = localStorage.getItem("rdagent-locale") as Locale | null;
const browserLocale = navigator.language.toLowerCase().startsWith("zh") ? "zh-CN" : "en";

export const i18nState = reactive<{ locale: Locale }>({
  locale: storedLocale === "zh-CN" || storedLocale === "en" ? storedLocale : browserLocale,
});

export function setLocale(locale: Locale) {
  i18nState.locale = locale;
  localStorage.setItem("rdagent-locale", locale);
  document.documentElement.lang = locale;
}

export function translate(key: string): string {
  return translations[i18nState.locale][key] || key;
}

const financeIntroTranslations: Record<string, string> = {
  "Applying R&D-Agent on finance Data Agent to automate the iterative process of evolving and trading financial factors by proposing, developing, evaluating, and refining them. The scenario is built on Qlib.":
    "将 R&D-Agent 应用于金融数据智能体，通过提出、开发、评估和优化金融因子，自动完成金融因子的迭代演进与交易流程。该场景基于 Qlib 构建。",
  "The dataset is includes daily stock data from the CSI300 index, with training data from 2008-2014, validation data from 2015-2016, and test data from 2017-2020.":
    "数据集包含沪深 300（CSI300）指数的股票日频数据：训练集为 2008 至 2014 年，验证集为 2015 至 2016 年，测试集为 2017 至 2020 年。",
  "The performance of new financial factors is assessed through quantitative backtesting using Qlib. This process evaluates both the prediction accuracy and the final profit.":
    "通过 Qlib 进行量化回测来评估新金融因子的表现，同时衡量预测准确性和最终收益。",
  "Applying R&D-Agent on finance data to automate iterative model evolution and quantitative trading by generating, implementing, and refining financial models for optimal performance. The scenario is built on Qlib.":
    "将 R&D-Agent 应用于金融数据，通过生成、实现和优化金融模型，自动完成模型迭代和量化交易，以获得更优表现。该场景基于 Qlib 构建。",
  "... Round♾️ N:\n  \t→ [🔍Research to generate hypothesis] → (hypothesis)\n  \t→ [🔍Design Experiment] → (Experiment Tasks)\n  \t→ [🛠️Experiment Implementation] → (Iterative Implementation in workspace)\n  \t→ [📝Evaluation and Analysis] → (Feedbacks)\n  → ...Next Round♾️...":
    "... 第♾️ N 轮：\n  \t→ [🔍研究：生成假设] →（假设）\n  \t→ [🔍设计实验] →（实验任务）\n  \t→ [🛠️实现实验] →（在工作区中迭代实现）\n  \t→ [📝评估与分析] →（反馈）\n  → ...下一轮♾️...",
};

export function translateMarkdownContent(content: string): string {
  if (i18nState.locale === "en" || !content) {
    return content;
  }

  const normalizedContent = content.replace(/\u00a0/g, " ").trim();
  if (financeIntroTranslations[normalizedContent]) {
    return financeIntroTranslations[normalizedContent];
  }

  if (normalizedContent.includes("Round♾️ N:")) {
    return normalizedContent
      .replace("Round♾️ N:", "第♾️ N 轮：")
      .replace("🔍Research to generate hypothesis", "🔍研究：生成假设")
      .replace("🔍Design Experiment", "🔍设计实验")
      .replace("🛠️Experiment Implementation", "🛠️实现实验")
      .replace("📝Evaluation and Analysis", "📝评估与分析")
      .replace("Iterative Implementation in workspace", "在工作区中迭代实现")
      .replace("Experiment Tasks", "实验任务")
      .replace("Feedbacks", "反馈")
      .replace("hypothesis", "假设")
      .replace("...Next Round♾️...", "...下一轮♾️...");
  }

  return content;
}

export function getLocaleLabel(locale: Locale): string {
  return locale === "zh-CN" ? "中文" : "English";
}
