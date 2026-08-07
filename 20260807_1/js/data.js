/**
 *==================================================
 * data.js｜頁面資料設定
 *==================================================
 *
 * 這個檔案集中管理：
 * 1. 左側選單文字
 * 2. 第二頁福利道具
 * 3. 第三頁技能資料
 * 4. 第四頁改版內容
 *
 * 日後要修改文字、圖片路徑或影片路徑，優先修改此檔案。
 */

window.GumData = {

  /*==================================================
    左側選單
  ==================================================*/
  navItems: [
    "首頁",
    "改版限時福利",
    "全新職業・軍士",
    "改版內容"
  ],

  /*==================================================
    Section 2｜福利道具

    icon：目前使用 Emoji 當作示意圖示
    name：道具名稱
    amount：道具數量或綁定說明
  ==================================================*/
  rewards: [
    {
      icon: "assets/section2/reward01.png",
      name: "普通防具箱子[30]",
      amount: "(綁定)x100"
    },
    {
      icon: "assets/section2/reward02.png",
      name: "普通武器箱子[30]",
      amount: "(綁定)x100"
    },
    {
      icon: "assets/section2/reward03.png",
      name: "移動祕笈",
      amount: "(綁定)x100"
    }
  ],

  /*==================================================
    Section 3｜軍士技能

    icon：目前使用 Emoji 當作示意圖示
    name：技能名稱

    正式製作時可再增加：
    image：技能圖片路徑
    video：技能影片路徑
  ==================================================*/
	
  skills: [
    {
      icon: "assets/section3/skill1.png",
      name: "穿刺槍"
    },
    {
      icon: "assets/section3/skill2.png",
      name: "碎雲斬"
    },
    {
      icon: "assets/section3/skill3.png",
      name: "太極護體"
    },
    {
      icon: "assets/section3/skill4.png",
      name: "橫掃八方"
    }
  ],

  /*==================================================
    Section 4｜改版內容

    title：頁籤按鈕與內容標題
    desc：內容說明文字
  ==================================================*/
updates: [
  {
    title: "脫胎換骨",
    image: "assets/section4/event01.png",
	link: "https://gsm.digeam.com/news/content/54"
  },
  {
    title: "七日簽到",
    image: "assets/section4/event02.png",
	  link: "https://gsm.digeam.com/news/content/55"
  },
  {
    title: "等級達成活動",
    image: "assets/section4/event03.png",
	  link: "https://gsm.digeam.com/news/content/56"
  }
],
};
