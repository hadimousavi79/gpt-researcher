"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6644],{1934:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=n(8168),o=(n(6540),n(5680));const a={},s="Hybrid Research",i={unversionedId:"examples/hybrid_research",id:"examples/hybrid_research",isDocsHomePage:!1,title:"Hybrid Research",description:"Introduction",source:"@site/docs/examples/hybrid_research.md",sourceDirName:"examples",slug:"/examples/hybrid_research",permalink:"/docs/examples/hybrid_research",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/examples/hybrid_research.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Simple Run",permalink:"/docs/examples/examples"},next:{title:"Contribute",permalink:"/docs/contribute"}},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Setting Up the Environment",id:"setting-up-the-environment",children:[],level:2},{value:"Preparing Documents",id:"preparing-documents",children:[{value:"1. Local Documents",id:"1-local-documents",children:[],level:3},{value:"2. Online Documents",id:"2-online-documents",children:[],level:3}],level:2},{value:"Running Hybrid Research By &quot;Local Documents&quot;",id:"running-hybrid-research-by-local-documents",children:[],level:2},{value:"Running Hybrid Research By &quot;Online Documents&quot;",id:"running-hybrid-research-by-online-documents",children:[],level:2},{value:"Understanding the Results",id:"understanding-the-results",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2},{value:"FAQ",id:"faq",children:[],level:2}],c={toc:l},p="wrapper";function u(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"hybrid-research"},"Hybrid Research"),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"GPT Researcher can combine web search capabilities with local document analysis to provide comprehensive, context-aware research results. "),(0,o.yg)("p",null,"This guide will walk you through the process of setting up and running hybrid research using GPT Researcher."),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("p",null,"Before you begin, ensure you have the following:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Python 3.10 or higher installed on your system"),(0,o.yg)("li",{parentName:"ul"},"pip (Python package installer)"),(0,o.yg)("li",{parentName:"ul"},"An OpenAI API key (you can also choose other supported ",(0,o.yg)("a",{parentName:"li",href:"/docs/gpt-researcher/llms/llms"},"LLMs"),")"),(0,o.yg)("li",{parentName:"ul"},"A Tavily API key (you can also choose other supported ",(0,o.yg)("a",{parentName:"li",href:"/docs/gpt-researcher/search-engines/retrievers"},"Retrievers"),")")),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"pip install gpt-researcher\n")),(0,o.yg)("h2",{id:"setting-up-the-environment"},"Setting Up the Environment"),(0,o.yg)("p",null,"Export your API keys as environment variables:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"export OPENAI_API_KEY=your_openai_api_key_here\nexport TAVILY_API_KEY=your_tavily_api_key_here\n")),(0,o.yg)("p",null,"Alternatively, you can set these in your Python script:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"import os\nos.environ['OPENAI_API_KEY'] = 'your_openai_api_key_here'\nos.environ['TAVILY_API_KEY'] = 'your_tavily_api_key_here'\n")),(0,o.yg)("p",null,'Set the environment variable REPORT_SOURCE to an empty string "" in default.py'),(0,o.yg)("h2",{id:"preparing-documents"},"Preparing Documents"),(0,o.yg)("h3",{id:"1-local-documents"},"1. Local Documents"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Create a directory named ",(0,o.yg)("inlineCode",{parentName:"li"},"my-docs")," in your project folder."),(0,o.yg)("li",{parentName:"ol"},"Place all relevant local documents (PDFs, TXTs, DOCXs, etc.) in this directory.")),(0,o.yg)("h3",{id:"2-online-documents"},"2. Online Documents"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Here is an example of your online document URL example: ",(0,o.yg)("a",{parentName:"li",href:"https://xxxx.xxx.pdf"},"https://xxxx.xxx.pdf")," (supports file formats like PDFs, TXTs, DOCXs, etc.) ")),(0,o.yg)("h2",{id:"running-hybrid-research-by-local-documents"},'Running Hybrid Research By "Local Documents"'),(0,o.yg)("p",null,"Here's a basic script to run hybrid research:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'from gpt_researcher import GPTResearcher\nimport asyncio\n\nasync def get_research_report(query: str, report_type: str, report_source: str) -> str:\n    researcher = GPTResearcher(query=query, report_type=report_type, report_source=report_source)\n    research = await researcher.conduct_research()\n    report = await researcher.write_report()\n    return report\n\nif __name__ == "__main__":\n    query = "How does our product roadmap compare to emerging market trends in our industry?"\n    report_source = "hybrid"\n\n    report = asyncio.run(get_research_report(query=query, report_type="research_report", report_source=report_source))\n    print(report)\n')),(0,o.yg)("h2",{id:"running-hybrid-research-by-online-documents"},'Running Hybrid Research By "Online Documents"'),(0,o.yg)("p",null,"Here's a basic script to run hybrid research:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'from gpt_researcher import GPTResearcher\nimport asyncio\n\nasync def get_research_report(query: str, report_type: str, report_source: str) -> str:\n    researcher = GPTResearcher(query=query, report_type=report_type, document_urls=document_urls, report_source=report_source)\n    research = await researcher.conduct_research()\n    report = await researcher.write_report()\n    return report\n\nif __name__ == "__main__":\n    query = "How does our product roadmap compare to emerging market trends in our industry?"\n    report_source = "hybrid"\n    document_urls = ["https://xxxx.xxx.pdf", "https://xxxx.xxx.doc"]\n\n    report = asyncio.run(get_research_report(query=query, report_type="research_report", document_urls=document_urls, report_source=report_source))\n    print(report)\n')),(0,o.yg)("p",null,"To run the script:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Save it as ",(0,o.yg)("inlineCode",{parentName:"li"},"run_research.py")),(0,o.yg)("li",{parentName:"ol"},"Execute it with: ",(0,o.yg)("inlineCode",{parentName:"li"},"python run_research.py"))),(0,o.yg)("h2",{id:"understanding-the-results"},"Understanding the Results"),(0,o.yg)("p",null,"The output will be a comprehensive research report that combines insights from both web sources and your local documents. The report typically includes an executive summary, key findings, detailed analysis, comparisons between your internal data and external trends, and recommendations based on the combined insights."),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"API Key Issues"),": Ensure your API keys are correctly set and have the necessary permissions."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Document Loading Errors"),": Check that your local documents are in supported formats and are not corrupted."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Memory Issues"),": For large documents or extensive research, you may need to increase your system's available memory or adjust the ",(0,o.yg)("inlineCode",{parentName:"li"},"chunk_size")," in the document processing step.")),(0,o.yg)("h2",{id:"faq"},"FAQ"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Q: How long does a typical research session take?"),"\nA: The duration varies based on the complexity of the query and the amount of data to process. It can range from 1-5 minutes for very comprehensive research."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Q: Can I use GPT Researcher with other language models?"),"\nA: Currently, GPT Researcher is optimized for OpenAI's models. Support for other models can be found ",(0,o.yg)("a",{parentName:"p",href:"/docs/gpt-researcher/llms/llms"},"here"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Q: How does GPT Researcher handle conflicting information between local and web sources?"),"\nA: The system attempts to reconcile differences by providing context and noting discrepancies in the final report. It prioritizes more recent or authoritative sources when conflicts arise."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Q: Is my local data sent to external servers during the research process?"),"\nA: No, your local documents are processed on your machine. Only the generated queries and synthesized information (not raw data) are sent to external services for web research."),(0,o.yg)("p",null,"For more information and updates, please visit the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/assafelovic/gpt-researcher"},"GPT Researcher GitHub repository"),"."))}u.isMDXComponent=!0},5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>h});var t=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||y[d]||a;return n?t.createElement(h,s(s({ref:r},p),{},{components:n})):t.createElement(h,s({ref:r},p))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);