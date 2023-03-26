const maxNumber = 100;
const data = [["影片標題", "影片網址", "隱私狀態", "日期", "觀看次數", "留言數"]];

function sleep(time) {
    return(new Promise(function(resolve, reject) {
        setTimeout(function() { resolve(); }, time);
    }));
}

async function parse() {
   const items = document.querySelectorAll("ytcp-video-row.ytcp-video-section-content");
   for(var i=0; i<items.length; i++){
      const item = items[i];
      const title = item.querySelector('#thumbnail-anchor').getAttribute("aria-label").replace(',', '，');
      const url = "https://www.youtube.com" + item.querySelector('#video-title').getAttribute("href");
      const privacy = item.querySelector(".cell-body.tablecell-visibility span.ytcp-video-row.label-span")?.innerText;
      const date = item.querySelector(".ytcp-video-row.cell-body.tablecell-date")?.innerText.replace(/\n.+/, "");
      const view = item.querySelector(".ytcp-video-row.cell-body.tablecell-views")?.innerText?.replace(',', '');
      const comment = item.querySelector(".ytcp-video-row.cell-body.tablecell-comments a.comments-link")?.innerText;
      if (!data.some(o => o.url === url)) {
         data.push([title, url, privacy, date, view, comment]);
      }
      
   }

   if (items.length < 50 || data.length >= (maxNumber + 1)) {
      console.log(data);
      const csvContent = "data:text/csv;charset=utf-8," + data.map(e => e.join(",")).join("\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
   } else {
      console.log('fetch next page...');
      document.querySelectorAll("#navigate-after")[0].click();
      await sleep(3000);
      parse();
   }
}

parse();

