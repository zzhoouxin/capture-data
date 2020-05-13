const cheerio = require("cheerio");
const superagent = require("superagent");
const url = 'http://wufazhuce.com/';

superagent.get(url,(err, res)=>{
    if(err) return;
    const $ = cheerio.load(res.text)
    let todayOneList = $('#carousel-one .carousel-inner .item');
    let todayOne = $(todayOneList[0]).find('.fp-one-cita').text().replace(/(^\s*)|(\s*$)/g, "");
    console.log('每日一语: ', todayOne);


})