var Button = function(text, reply_msg){
  this.text = text
  this.reply_msg = reply_msg
}

// 製作按鈕，可以隨意新增按鈕變數來放到下方的鍵盤上
var fans_number_bt = new Button("👍粉絲人數", undefined)
var follow_bt = new Button("🔔追隨開關", undefined)
var about_bt = new Button("🛃關於我們", "這是一個專門設計給從 Line@ 搬移來的商家用的範本\n大家可以直接取用並自由更改。\n開發者 @HenryLab\n本公司網址: https://t.me/HenryLab\n聯絡方式: 02-XXXX-XXXX")
var donate_bt = new Button("💳支持我們", "這是我的銀行戶頭 xx-xxxxxxxx-xxxxxxxxx\n或可透過PayPal:\nxxxxxxxxxxxx\n支付，謝謝乾爹")
var howto_bt = new Button("❓如何使用", "這個機器人就是範例\n詳細使用方式請到\nhttps://github.com/henry8168/telegram_company_example_bot\n參考說明")

// 將按鈕配置在粉絲們或管理員們的鍵盤 (keyboard) 上
var keyboard_fans = [
  // 第一列鍵盤
  [
    // 第一個按鈕
    {
      text: fans_number_bt.text
    },
    // 第二個按鈕
    {
      text: follow_bt.text
    },
    // 第三個按鈕
    {
      text: about_bt.text
    },
  ],
  // 第二列鍵盤
  [
    // 第一個按鈕
    {
      text: donate_bt.text
    },
    // 第二個按鈕
    {
      text: howto_bt.text
    }
  ],
  // 第三列鍵盤
  [
    // 第一個按鈕
    {
      text: "🔘自訂按鈕1"
    },
    // 第二個按鈕
    {
      text: "🔘自訂按鈕2"
    },
    // 第三個按鈕
    {
      text: "🔘自訂按鈕3"
    },
  ]
]

var keyboard_admins = [
  // 第一列鍵盤
  [
    // 第一個按鈕
    {
      text: "👍粉絲人數"
    },
    // 第二個按鈕
    {
      text: "🔘自訂按鈕1"
    },
  ],
  // 第二列鍵盤
  [
    // 第一個按鈕
    {
      text: "🔘自訂按鈕2"
    },
    // 第二個按鈕
    {
      text: "🔘自訂按鈕3"
    }
  ],
  // 第三列鍵盤
  [
    // 第一個按鈕
    {
      text: "🔘自訂按鈕4"
    },
    // 第二個按鈕
    {
      text: "🔘自訂按鈕5"
    },
    // 第三個按鈕
    {
      text: "🔘自訂按鈕6"
    },
  ]
]