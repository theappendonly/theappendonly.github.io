// The tiles, in grid order (left to right, top to bottom). Edit this file to swap a tile; index.html stays put.
// image: a square-ish picture in img/. tag: Article, Tool, Model, App... (anything short).

window.PROFILE = {
  name: "Dan Johnston",
  handle: "Append Only",
  photo: "img/profile.jpg",
  pitch: "Hello, Howdy, Qué Pasa, Nǐ hǎo.",
  // One string per paragraph.
  about: [
"I'm Dan. I'm a working FP&A analyst in lending and the author of Append Only, where I write roughly once a week about whatever catches my interest. For the past two years that's been lending, because most durable goods are bought on credit.",
"I run my own PostgreSQL environment where I build financial models, forecasts and data pipelines from scratch. I call it my traveling circus of analytics: a county-level mortgage default model, a corporate credit rating model, and lender reviews built from HMDA and SEC filings.",
"Before finance I cut my teeth in marketing and trade shows at Stanley Black & Decker, where I learned that every good financial story needs more than numbers. It needs narrative.",
"Outside of spreadsheets I'm a home chef, a griller when the weather's nice, and a collector of antique rugs (ask me about my early-1900s Heriz). Favorite movie is a toss-up between Cool Hand Luke and The Good, the Bad and the Ugly. Both remind me that grit, character, and a little defiance go a long way.",
],
  links: [
    { label: "Substack", url: "https://theappendonly.substack.com" },
    { label: "GitHub",   url: "https://github.com/theappendonly" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/daniel-v-johnston/" },
    { label: "Resume",   url: "https://docs.google.com/document/d/1XaxrOQ7u2sODSdyvcqPkXeubHis1aZbSrdYN5KnG9g0/edit?usp=sharing" },
    { label: "Google Drive Resources", url: "https://drive.google.com/drive/folders/1SxMtp-iWkd3KtbO_tdab14lix20T2PEf?usp=drive_link" },


  ],
};

window.PROJECTS = [
  { title: "A Transparent Mortgage Default Model", tag: "Article", image: "img/default-model.jpg",
    hook: "What the rating agencies won't publish: county-level default odds, method included.",
    url: "https://theappendonly.substack.com/p/i-built-what-the-rating-agencies" },
  { title: "Mortgage Default Heatmap", tag: "App", image: "img/heatmap-app.jpg",
    hook: "Every U.S. county's default probability, live in the browser.",
    url: "https://mortgagedefaultmodel-6xpczdpbz99ccevavqewwj.streamlit.app/" },
  { title: "Corporate Credit Ratings Model", tag: "Model", image: "img/credit-ratings.jpg",
    hook: "A Python model that rates companies from their filings, checked against the agencies.",
    url: "https://credit-rating-app.streamlit.app/" },
  { title: "Does AI Make a Difference in Terminal Loan Value?", tag: "Article", image: "img/ai-lenders.jpg",
    hook: "Rocket ranked 14th of 20 Ohio lenders on yield. The thrift with no AI story came out on top.",
    url: "https://theappendonly.substack.com/p/does-ai-make-a-difference-in-terminal" },
  { title: "No Sign of Lot Rot in $90k Trucks", tag: "Article", image: "img/high-msrp.jpg",
    hook: "Days on lot and repo rates for $90k+ trucks, against the panic headlines.",
    url: "https://theappendonly.substack.com/p/that-guy-in-the-f-250-isnt-a-dupe" },
  { title: "The 10 Worst Housing Markets", tag: "Article", image: "img/worst-markets.jpg",
    hook: "Where the model says default risk is highest, and why.",
    url: "https://theappendonly.substack.com/p/rocket-science-it-isnt-10-markets" },
  { title: "loanDepot: Recovery on Paper Only", tag: "Article", image: "img/loandepot.jpg",
    hook: "Reserves shrank 12.5% the same year the loans' default risk jumped 36%.",
    url: "https://theappendonly.substack.com/p/loandepot-is-recovering-on-paper" },
  { title: "Debt-to-Income Is a Coin Flip", tag: "Article", image: "img/gini-auc.jpg",
    hook: "A Gini/AUC test on 100k mortgage applications: DTI barely sorts risk until it passes 50%.",
    url: "https://theappendonly.substack.com/p/debt-to-income-is-a-coin-flip" },
];
