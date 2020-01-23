function doPost(e){
  var update = JSON.parse(e.postData.contents);
  var rcv_message = update.message
  var rcv_chat = undefined
  var rcv_from = undefined
  if(rcv_message){
    rcv_from = rcv_message.from
    if(rcv_message.chat){
      rcv_chat = rcv_message.chat
    }
  }
  if(rcv_chat.id < 0){
    send_msg(rcv_chat.id, "收到了來自群組的訊息，沒動作。")
  }
  else if(rcv_message.text == "👍粉絲人數"){
    send_fans_number(rcv_from.id)
  }
  else if(rcv_from.id == Author_UID){
    send_keyboard(rcv_from.id, "作者專用控制台", keyboard_panel)
    if(rcv_message.text){
      broadcast_msg(rcv_message.text)
      send_keyboard(rcv_from.id, "已廣播作者文字訊息", keyboard_panel)
    }
    else if(rcv_message.photo){
      send_keyboard(rcv_from.id, "收到作者照片", keyboard_panel)
      var photo = rcv_message.photo[rcv_message.photo.length-1]
      if(photo){
        broadcast_photo(photo.file_id)
        send_keyboard(rcv_from.id, "已廣播作者照片", keyboard_panel)
      }
    }
    else if(rcv_message.sticker){
      if(rcv_message.sticker.is_animated){
        send_keyboard(rcv_from.id, "收到作者動態貼圖", keyboard_panel)
      }
      else{
        send_keyboard(rcv_from.id, "收到作者靜態貼圖", keyboard_panel)
      }
      broadcast_sticker(rcv_message.sticker.file_id)
      send_keyboard(rcv_from.id, "已廣播作者貼圖", keyboard_panel)
    }
    else if(rcv_message.voice){
      send_keyboard(rcv_from.id, "收到作者音訊檔案", keyboard_panel)
      broadcast_voice(rcv_message.voice.file_id)
      send_keyboard(rcv_from.id, "已廣播作者音訊檔案", keyboard_panel)
    }
    else if(rcv_message.video_note){
      send_keyboard(rcv_from.id, "收到作者視訊檔案", keyboard_panel)
      broadcast_video_note(rcv_message.video_note.file_id)
      send_keyboard(rcv_from.id, "已廣播作者視訊檔案", keyboard_panel)
    }
    else if(rcv_message.document){
      if(rcv_message.animation){
        send_keyboard(rcv_from.id, "收到作者影片", keyboard_panel)
      }
      else{
        send_keyboard(rcv_from.id, "收到作者檔案", keyboard_panel)
      }
      broadcast_document(rcv_message.document.file_id)
      send_keyboard(rcv_from.id, "已廣播作者檔案", keyboard_panel)
    }
    else{
      send_keyboard(rcv_from.id, "收到作者其他訊息", keyboard_panel)
    }
  }
  else if(rcv_message.text){
    if(rcv_message.text=="/start"){
      send_keyboard(rcv_from.id, welcome_msg, keyboard_home)
      join(rcv_from.id)
    }
    else if(rcv_message.text=="🔔追隨開關"){
      var row = fan_row(rcv_from.id)
      if(row){
        leave(rcv_from.id, row)
      }
      else{
        join(rcv_from.id, row)
      }
    }
    else{
      send_keyboard(rcv_from.id, "收到粉絲文字訊息", keyboard_home)
    }
  }
  else if(rcv_message.photo){
    send_keyboard(rcv_from.id, "收到粉絲照片", keyboard_home)
    var photo = rcv_message.photo[rcv_message.photo.length-1]
    if(photo){
      send_photo(rcv_from.id, photo.file_id)
    }
  }
  else if(rcv_message.sticker){
    if(rcv_message.sticker.is_animated){
      send_keyboard(rcv_from.id, "收到粉絲動態貼圖", keyboard_home)
    }
    else{
      send_keyboard(rcv_from.id, "收到粉絲靜態貼圖", keyboard_home)
    }
  }
  else if(rcv_message.voice){
    send_keyboard(rcv_from.id, "收到粉絲音訊檔案", keyboard_home)
  }
  else if(rcv_message.video_note){
    send_keyboard(rcv_from.id, "收到粉絲視訊檔案", keyboard_home)
  }
  else if(rcv_message.document){
    if(rcv_message.animation){
      send_keyboard(rcv_from.id, "收到粉絲影片", keyboard_home)
    }
    else{
      send_keyboard(rcv_from.id, "收到粉絲檔案", keyboard_home)
    }
  }
  else{
    send_keyboard(rcv_from.id, "收到粉絲其他訊息", keyboard_home)
  }
  return ret
}

function debug(){
}