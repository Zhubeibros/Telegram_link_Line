function language() {
  var language = { //多包一層看以後有沒有打算擴充...............
    "language_name": "Native(zh-tw)",
    "language_version": 0.1,
    "match_version": 3.1,
    "update_time": 1536343691,
    "author": "永格天",
    "correspond_text": {
      "backed_up_ing": {
        "type": "to_Telegram",
        "text": "已備份舊資料，更新doc資料庫中...",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "backed": {
        "type": "to_Telegram",
        "text": "doc資料庫更新完畢!，如之後有問題可以手動還原\n#doc 備份點",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "re_send_command": {
        "type": "to_Telegram",
        "text": "請重新執行上一個指令_(:з」∠)_",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "For_this_reply": {
        "type": "to_Line",
        "text": "{0}\n^針對此回復^\n{1}", // {0} = 要回覆的文字內容 , {1} = 回覆的文字內容
      },
      "sendPhoto_ed": {
        "type": "to_Telegram",
        "text": "(圖片已發送!)",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "sendVideo_ed": {
        "type": "to_Telegram",
        "text": "(影片已發送!)",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "not_support_sticker": {
        "type": "to_Telegram",
        "text": "(暫時不支援貼圖傳送喔!)",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "not_support_audio": {
        "type": "to_Telegram",
        "text": "(暫時不支援audio傳送喔!)",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "not_support_voice": {
        "type": "to_Telegram",
        "text": "(暫時不支援voice傳送喔!)",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "not_support_document": {
        "type": "to_Telegram",
        "text": "(暫時不支援document傳送喔!)",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "plz_exit_and_resend": {
        "type": "to_Telegram",
        "text": "請先按下 /exit 離開後再下指令喔!",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "duplicate_name": {
        "type": "to_Telegram",
        "text": "名子不可重複，請重新輸入一個!",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "duplicate_command": {
        "type": "to_Telegram",
        "text": "名子不可跟命令重複，請重新輸入一個!",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "rename_success": {
        "type": "to_Telegram",
        "text": "{0}完成~\n{1}\n->\n{2}\n{3}",
        // {0} = 自定義的"🔖 重新命名" , {1} = 原本的房間名
        // {2} = "重命名的房間名" , {3} = 自定義的"🔮 開啟主選單"
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "delete_room_success": {
        "type": "to_Telegram",
        "text": "已刪除此聊天室",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "plz_input_token": {
        "type": "to_Telegram",
        "text": "請輸入botToken \n或按下 /unsetroom 取消升級",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "unsetroom_ed": {
        "type": "to_Telegram",
        "text": "已取消設定bot",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "Webhook_success_plz_input_any_text_in_new_bot": {
        "type": "to_Telegram",
        "text": "Webhook已連結!\n進入最後一個步驟了! \n請至新機器人聊天室那任意輸入文字以進行綁定。",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "some_error": {
        "type": "to_Telegram",
        "text": "看來發生了一點錯誤.....\n請稍候再試.....",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "plz_input_correct_token": {
        "type": "to_Telegram",
        "text": "看來發生了一點錯誤>_<\n請輸入正確token!",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "Occupied_ed": {
        "type": "to_Telegram",
        "text": "這個 '聊天室' 已被其他bot佔用了!\n請至新的bot聊天室留言。",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "uproom_success": {
        "type": "to_Telegram",
        "text": "已升級成功(๑•̀ㅂ•́)و✧\n\n房間狀態:\n{0}", // {0} = 房間的json
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "not_input_here": {
        "type": "to_Telegram",
        "text": "請至 __新機器人聊天室__ !!!那任意輸入文字以進行綁定。\n不是這裡喔!",
        "notification": false, //不通知? true or false
        "parse_mode": "Markdown" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "droproom_fail": {
        "type": "to_Telegram",
        "text": "降級失敗! 詳情如下：\nresponseCode：\n{0}\nerror：\n{1}",
        // {0} = responseCode , {1} = e
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "droproom_success": {
        "type": "to_Telegram",
        "text": "已降級成功(๑•̀ㅂ•́)و✧\n\n" + "房間狀態:\n{0}", // {0} = 房間狀態
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "add_keyword_success": {
        "type": "to_Telegram",
        "text": "已成功新增\n\n{0}\n\n如遇離開請按 /main\n或者繼續輸入新增",
        // {0} = 全部的keyword列表
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "add_keyword_fail": {
        "type": "to_Telegram",
        "text": "新增失敗，原因如下：{0}",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "delete_keyword_success": {
        "type": "to_Telegram",
        "text": "已成功移除\n\n{0}\n\n如遇離開請按 /main\n或者繼續輸入移除",
        // {0} = 全部的keyword列表
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "delete_keyword_fail": {
        "type": "to_Telegram",
        "text": "移除失敗，如遇重新移除請先再次看過關鍵字名單再操作\n按下 /lookkeyword 可顯示名單\n移除失敗原因如下：\n{0}",
        // {0} = 移除失敗原因
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "change_message_time_func": {
        "type": "to_Telegram",
        "text": "已成功 {0} 訊息時間!", // {0} = 開啟or關閉
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "開啟": { //這下我的 In() 要怎麼改.....，算了 一定有辦法的。
        "type": "command(Telegram)",
        "text": "開啟"
      },
      "關閉": {
        "type": "command(Telegram)",
        "text": "關閉"
      },
      "w_error_status": {
        "type": "to_Telegram",
        "text": "寫入失敗，詳情如下：",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "not_eat_this": {
        "type": "to_Telegram",
        "text": "030...\n請不要給我吃怪怪的東西...",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "🔮 開啟主選單": {
        "type": "to_Telegram",
        "text": "🔮 開啟主選單",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "🔃 重新整理": {
        "type": "command(Telegram)",
        "text": "🔃 重新整理"
      },
      "🔙 返回房間": {
        "type": "command(Telegram)",
        "text": "🔙 返回房間"
      },
      "請選擇聊天室": {
        "type": "to_Telegram",
        "text": "請選擇聊天室",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "🔭 訊息狀態": {
        "type": "command(Telegram)",
        "text": "🔭 訊息狀態"
      },
      "unread_number": {
        "type": "to_Telegram",
        "text": "{0}{1}\n未讀： {2}\n-------------\n",
        // {0} = 繼承文本 , {1} = 房間名稱 , {2} = 未讀數量
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "✔ 關閉鍵盤": {
        "type": "command(Telegram)",
        "text": "✔ 關閉鍵盤"
      },
      "colse_Keyboard_ed": {
        "type": "to_Telegram",
        "text": "已關閉鍵盤，如欲再次開啟請按 /main",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "🚀 發送訊息": {
        "type": "command(Telegram)",
        "text": "🚀 發送訊息"
      },
      "sendtext_to_XXX": {
        "type": "to_Telegram",
        "text": "將對 {0} 發送訊息\n如欲離開請輸入 /exit \n請輸入訊息：",
        // {0} = 房間名稱
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "exit_room_ed": {
        "type": "to_Telegram",
        "text": "======已停止對話!======",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "📬 讀取留言": {
        "type": "command(Telegram)",
        "text": "📬 讀取留言"
      },
      "not_need_read": {
        "type": "to_Telegram",
        "text": "這個房間並沒有未讀的通知喔~ ",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "caption_der_form": { //喔甘這個命名www
        "type": "to_Telegram(only_text)",
        "text": "來自: {0}", // {0} = TG、LINE中發此訊息的人名
      },
      "sorry_plz_go_to_url": {
        "type": "to_Telegram",
        "text": "抱歉!請至該連結下載或聆聽!\n{0}\n\n來自:{1} ",
        // {0} = audio DURL , {1} = LINE中發此訊息的人名
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "is_from": {
        "type": "to_Telegram(only_text)",
        "text": "來自: {0}" // {0} = LINE中發此訊息的人名
      },
      "read_massage_ed": {
        "type": "to_Telegram",
        "text": "=======讀取完畢=======",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "🔖 重新命名": {
        "type": "command(Telegram)",
        "text": "🔖 重新命名"
      },
      "🔥 刪除房間": {
        "type": "to_Telegram",
        "text": "🔥 刪除房間",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "rename_room_text": {
        "type": "to_Telegram",
        "text": "將對 {0} 重新命名!!!\n如要取消命名請按 /main 取消\n請輸入新名子：",
        // {0} = 目標房間名稱
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "sure_delete_room?": {
        "type": "to_Telegram",
        "text": "你確定要刪除 {0} 嗎?\n若是請按一下 /delete\n若沒按下則不會刪除!!!",
        // {0} = 目標房間名稱
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "🐳 開啟通知": {
        "type": "command(Telegram)",
        "text": "🐳 開啟通知"
      },
      "🔰 暫停通知": {
        "type": "command(Telegram)",
        "text": "🔰 暫停通知"
      },
      "enabled_notification_ed": {
        "type": "to_Telegram",
        "text": "已開啟 {0} 的通知", // {0} = 目標房間名稱
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "disabled_notification_ed": {
        "type": "to_Telegram",
        "text": "已暫停 {0} 的通知", // {0} = 目標房間名稱
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "⭐ 升級房間": {
        "type": "command(Telegram)",
        "text": "⭐ 升級房間"
      },
      "uproom_Introduction": {
        "type": "to_Telegram",
        "text": '⭐ 升級房間功能介紹：\n升級房間後，以後來自該對象(Line)的訊息皆會及時傳到 **新的"群組"聊天室** ，而不會傳到這個"bot"聊天室中，這個功能是可以回來這裡取消的。',
        "notification": false, //不通知? true or false
        "parse_mode": "Markdown" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "uproom_sure?": {
        "type": "to_Telegram",
        "text": "您確定要升級 {0} 嗎?\n若是請按一下 /uproom \n若沒按下則不會進入升級!!!",
        // {0} = 目標房間名稱
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "💫 降級房間": {
        "type": "command(Telegram)",
        "text": "💫 降級房間"
      },
      "droproom_sure?": {
        "type": "to_Telegram",
        "text": "您確定要降級 {0} 嗎?\n若是請按一下 /droproom \n若沒按下則不會降級!!!",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "debug_ed": {
        "type": "to_Telegram",
        "text": "已debug\nREST_FastMatch1and2() : {0}\nREST_keyboard() : {1}",
        // {0} = REST_FastMatch1and2()的回傳結果 , {1} = REST_keyboard()的回傳結果
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "allRead_ed": {
        "type": "to_Telegram",
        "text": "已全已讀",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "🔧 更多設定": {
        "type": "command(Telegram)",
        "text": "🔧 更多設定"
      },
      "🔑設定關鍵字提醒": {
        "type": "command(Telegram)",
        "text": "🔑設定關鍵字提醒"
      },
      "⏰訊息時間啟用?": {
        "type": "command(Telegram)",
        "text": "⏰訊息時間啟用?"
      },
      "more_setting_status": {
        "type": "to_Telegram",
        "text": '設定狀態：\n● 關鍵字提醒：{0}\n● 訊息時間啟用： {1}\n',
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "plz_select_on_off": {
        "type": "to_Telegram",
        "text": "請選擇開啟或關閉",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "first_use_keyword_text": {
        "type": "to_Telegram",
        "text": "提醒您，如要啟用關鍵字提醒，請記得按下方按鈕開啟！\n預設為'關閉提醒'",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "📎 新增關鍵字": {
        "type": "command(Telegram)",
        "text": "📎 新增關鍵字"
      },
      "♻ 移除關鍵字": {
        "type": "command(Telegram)",
        "text": "♻ 移除關鍵字"
      },
      "啟動關鍵字提醒": {
        "type": "command(Telegram)",
        "text": "啟動關鍵字提醒"
      },
      "暫停關鍵字提醒": {
        "type": "command(Telegram)",
        "text": "暫停關鍵字提醒"
      },
      "add_keyword_ing": {
        "type": "to_Telegram",
        "text": "請輸入欲新增關鍵字\n新增多組關鍵字請用 ',' 或 '，' 號隔開\n如欲離開請按 /main",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "delete_keyword_ing": {
        "type": "to_Telegram",
        "text": '請輸入欲移除關鍵字的 **前方編號!!!** \n刪除多組關鍵字請用 "任意符號" 隔開(推薦用","或"，")\n如遇離開請按 /main',
        "notification": false, //不通知? true or false
        "parse_mode": "Markdown" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "turn_on_keyword_ed": {
        "type": "to_Telegram",
        "text": "已啟用關鍵字提醒!",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "turn_off_keyword_ed": {
        "type": "to_Telegram",
        "text": "已暫停關鍵字提醒!",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "select_room_text": {
        "type": "to_Telegram",
        "text": "您選擇了 {0} 聊天室\n未讀數量：{1}\n聊天室通知：{2}\n請問你要?",
        // {0} = 房間名稱 , {1} = 未讀數量 , {2} = 有沒有開啟聊天室的通知(true or false)
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "incorrect_operation": {
        "type": "to_Telegram",
        "text": "錯誤的操作喔（ ・∀・），請檢查環境是否錯誤",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "not_find_location_name": {
        "type": "to_Telegram",
        "text": "未找到地點",
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "sendPhoto_ing": {
        "type": "to_Telegram",
        "text": "(正在傳送圖片，請稍後...)",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "sendSticker_ing": {
        "type": "to_Telegram",
        "text": "(正在傳送貼圖，請稍後...)",
        "notification": true, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "you_have_new_massage": {
        "type": "to_Telegram",
        "text": "你有新訊息!\n來自：{0}\n點擊以快速切換至該房間 /d{1}",
        // {0} = 提及的來源房間 , {1} = 快速切換代號
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "keyword_trigger": {
        "type": "to_Telegram",
        "text": "有關鍵字被提及！\n{0}\nby: {1}\n點擊以快速切換至該房間 /d{2}",
        // {0} = 被提及的關鍵字組 , {1} = 提及的來源房間 , {2} = 快速切換代號
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "new_ID_sign_in": {
        "type": "to_Telegram",
        "text": "已有新ID登入!!! id =\n{0}\n請盡快重新命名。",
        // {0} = ID名稱或人的名稱
        "notification": false, //不通知? true or false
        "parse_mode": "" //送出文字模式 "HTML" or "Markdown" or ""
      },
      "not_registered":{
        "type": "to_Telegram",   // "to_Line"、"to_Telegram"、"command(Telegram)"、"to_Telegram(just_text)"
        "text": "您好!此群似乎還沒有與資料庫綁定，等主人綁定後我才能在此服務。\n若您想要一個自己的 Telegram_link_Line 機器人，請至https://github.com/we684123/Telegram_link_Line",
        "notification": false,  //不通知? true or false
        "parse_mode":""  //送出文字模式 "HTML" or "Markdown" or ""
      },
      "plz_forward_verification_code":{
        "type": "to_Telegram",   // "to_Line"、"to_Telegram"、"command(Telegram)"、"to_Telegram(just_text)"
        "text": "請確認我在要綁定的群組中後，再轉發上方的驗證碼到那以進行綁定!\n或按下 /unsetroom 取消升級",
        "notification": false,  //不通知? true or false
        "parse_mode":""  //送出文字模式 "HTML" or "Markdown" or ""
      },
      "not_find_ctrl_id":{
        "type": "to_Telegram",   // "to_Line"、"to_Telegram"、"command(Telegram)"、"to_Telegram(just_text)"
        "text": '由於是第一次做房間升級，請稍待系統準備。\n準備好後會再跟您介紹升級房間的功用。',
        "notification": false,  //不通知? true or false
        "parse_mode":""  //送出文字模式 "HTML" or "Markdown" or ""
      },
      "get_ctrl_id_error":{
        "type": "to_Telegram",   // "to_Line"、"to_Telegram"、"command(Telegram)"、"to_Telegram(just_text)"
        "text": "抱歉綁定失敗QAQ，請稍後在試!\n失敗原因如下：{0}", // {0} = 失敗原因
        "notification": false,  //不通知? true or false
        "parse_mode":""  //送出文字模式 "HTML" or "Markdown" or ""
      },
      "bing_success":{
        "type": "to_Telegram",   // "to_Line"、"to_Telegram"、"command(Telegram)"、"to_Telegram(just_text)"
        "text": '{0} 綁定成功!\n\n提醒您! 如果這群不只主人你一個人的話\n請記得去主控bot選擇這個房間並開啟"顯示發送者"，以免Line端眾不知何人發送。',
         // {0} = 房間名稱
        "notification": false,  //不通知? true or false
        "parse_mode":""  //送出文字模式 "HTML" or "Markdown" or ""
      },
      "text_format":{
        "type": "to_Telegram",   // "to_Line"、"to_Telegram"、"command(Telegram)"、"to_Telegram(just_text)"
        "text": '{0}：\n{1} ',
         // {0} = 發送者名稱 、 {1} = 所發送的訊息
        "notification": false,  //不通知? true or false
        "parse_mode":""  //送出文字模式 "HTML" or "Markdown" or ""
      },
      "send_to_TG_error":{
        "type": "to_Telegram",   // "to_Line"、"to_Telegram"、"command(Telegram)"、"to_Telegram(just_text)"
        "text": '傳送失敗...，原因如下\n\n{0}', // {0} = 失敗原因
        "notification": false,  //不通知? true or false
        "parse_mode":""  //送出文字模式 "HTML" or "Markdown" or ""
      },
      "lookkeyword_result":{
        "type": "to_Telegram",   // "to_Line"、"to_Telegram"、"command(Telegram)"、"to_Telegram(just_text)"
        "text": '傳送失敗...，原因如下\n\n{0}', // {0} = 失敗原因
        "notification": false,  //不通知? true or false
        "parse_mode":""  //送出文字模式 "HTML" or "Markdown" or ""
      },
    }
  }
  /*
    "":{
      "type": "to_Telegram",   // "to_Line"、"to_Telegram"、"command(Telegram)"、"to_Telegram(just_text)"
      "text": "",
      "notification": false,  //不通知? true or false
      "parse_mode":""  //送出文字模式 "HTML" or "Markdown" or ""
    },
  */
  return language
}
