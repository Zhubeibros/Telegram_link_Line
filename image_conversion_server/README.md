# image_conversion_server
這個東西我目前架在GCP上    
原本也是免費方案拉，直到2天前我收到他要收IP錢的事情......    

----

# 基本款

最基本架好這個服務的方式。    
只需要上面的3樣東東    

1. main.py (檔案)    
2. conversion用 (資料夾)    
3. mylib (資料夾)    

這三個放在同一個資料夾，然後修改 main.py 的 SSL key位置(20、21行)即可    
(如果沒有key... 建議還是去申請個，letsencrypt 是你的好選擇<3)    
(在不然就修一下程式，裸奔上路?)    
```
python main.py
```
搞定!    

----

# 額外補充包 (nginx、uWSGI)

附上這兩個的設定檔，可自行取用，當然請記得改成適合自身狀況的方式    

----

# heroku
直接拿 heroku_version 的東西去部屬就可以了     
試過能用     
