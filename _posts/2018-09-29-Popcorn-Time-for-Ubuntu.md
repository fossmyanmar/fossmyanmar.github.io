---
layout: post
title:  "How to Install Popcorn Time on Ubuntu!"
date:   2018-09-29 12:35:00
categories: Ubuntu
---
# ***Popcorn Time for Ubuntu*** !

![icon](https://upload.wikimedia.org/wikipedia/commons/d/df/Pctlogo.png "Popcorn Time for Ubuntu")

Popcorn Time သည် **_Netflix_** ကိုမှီငြိမ်းထားေ
သာ **torrent** streaming applicton ဖြစ်သည်။
၎င်းသည် **open source application** တစ်ခုဖြစ်၏။

၎င်း၏အားသာချက်များမှာ 
- ပုံမှန်ကဲ့သို့ **torrent** video များအား ဒေါင်းလုတ်ပြုလုပ်ချိန်ကိုစောင့်ဆိုင်းပြီးမှသာ ကြည့်ရှုရခြင်းမျိုးမဟုတ်ဘဲ **_YouTube_**, **_Netflix_**, **_openload_** တို့ကဲ့သို့ တိုက်ရိုက်နီးပါး ***stream*** ကြည့်ရှုနိုင်ခြင်းဖြစ်သည်။ 
  
- ပို၍ကောင်းမွန်သော အချက်မှာ **ကြော်ငြာ** များမပါရှိခြင်းဖြစ်သည်။
  
- ၎င်းတွင် Movies, TV series, Anamie အစရှိသဖြင့်ကဏ္ဍများ စုံလင်စွာပါရှိပါသည်။


အားနည်းချက်များမှာမူ 
- **torrent** ကိုအသုံးပြုထားသဖြင့် ထပ်ဆင့်ပေးပို့သူ(seeds)နည်းသော Moviesများအတွက် အဆင်ပြေကောင်းမွန်စွာကြည့်ရှုနိုင်မည်မဟုတ်ပါ။

- Seedsနည်းသော Moviesများကို ၎င်းတွင်ပါရှိသော**Magnet link**မှတဆင့် `qbittorrent` ကဲ့သို့သော torrent software application များဖြင့် ဒေါင်းလုတ်ပြုလုပ်နိုင်ပါသေးသည်။
 
- Seeds လုံးဝမရှိသော ဖိုင်များကိုမူ ဒေါင်းလုတ်ရယူနိုင်မည်မဟုတ်ပါ။

>သတိပြုရန်အချက်မှာ အချို့နိုင်ငံများတွင် Torrent အသုံးပြုမှုကို ဥပဒေအရ တင်းကြပ်စွာတားမြစ်ထားသည်ဖြစ်၏။ သို့ဖြစ်ပါ၍ Popcorn Time အားအသုံးပြုမည်ဆိုပါက မိမိနေထိုင်သည့်နိုင်ငံ၏ ဥပဒေသက်ရောက်မှုများဖြင့် ဆင်ခြင်အသုံးပြုရန်လိုအပ်ပါသည်။
အခြားနည်းလမ်းအားဖြင့် [ivacy](https://www.ivacy.com/buy-vpn/) ကဲ့သို့သော Torrent အသုံးပြုမှုအတွက်ရည်ရွယ်၍ ဝန်ဆောင်မှုပေးသည့် VPN များကိုတွဲဖက်အသုံးပြုသင့်ပါသည်။ 

_Popcorn Time တွင်များစွာသော ဆင်တူdomains များလည်းရှိသည်။
အောက်တွင်ပြထားသော ပုံတွင်ကြည့်နိုင်ပါသည်။_


![photo](https://pbs.twimg.com/media/CiANgO8XEAETorA.jpg "Popcorn Time infographic")

---

## **Popcorn Time Installation ပြုလုပ်ခြင်း**


## **အဆင့် ၁**

ဦးစွာ ယခု [လင့်](https://popcorntime.sh/linux) သို့သွား၍ မိမိအသုံးပြုသော linux system၏ architecture အမျိုးအစားကိုရွေးချယ်ပြီး ဒေါင်းလုတ်ရယူပါ။ 
ထို့နောက် installationပြုလုပ်ရာတွင် Data files များထားသိုရန် system root အောက်ရှိ `/opt` Directoryထဲမှာ အောက်ပါ **command** ဖြင့် Directory အသစ်ဆောက်ပါမည်။
```bash
sudo mkdir /opt/popcorntime
```

ဒေါင်းလုတ်ရယူထားသော Homeအောက်ရှိ Downloads Directory အောက်သို့သွားပါမည်။ 
```bash
cd ~/Downloads
```
ယခင် ဒေါင်းလုတ်ပြုလုပ်ထားသော Popcon Time tar.xz archive ဖိုင်အား အောက်ပါ **command** ဖြင့် အသစ်ဆောက်လုပ်ထားသည့် `opt/popcorntime` Directory အောက်သို့ ဖြည်ချထည့်သွင်းပါမည်။
sudo tar Jxf Popcorn-Time-* -C /opt/popcorntime

##  **အဆင့် ၂**

ဆက်လက်၍ **Popcorn Time** အား Systemအတွင်းရှိ မိမိနှင့်တကွ အခြားUsersများမှ **command**ဖြင့် ခေါ်ယူအသုံးပြုနိုင်အောင် ပြုလုပ်ပါမည်။
```bash
ln -sf /opt/popcorntime/Popcorn-Time /usr/bin/Popcorn-Time
```
## **အဆင့် ၃**
ယေဘူယျအားဖြင့် **Popcorn Time Installation** ပြီးမြောက်ပါပြီ။ သို့သော် `terminal` မှမဟုတ်ဘဲ Desktop Application အနေဖြင့် **Application Menu** မှအသုံးပြုနိုင်အောင် ပြုလုပ်ပါမည်။ 
၎င်းအတွက် **Desktop Entry** ပြုလုပ်ဖို့လိုပါသည်။
ဦးစွာ **Nano text editor** ကိုအသုံးပြု၍ `/usr/share/applications` Directory ထဲတွင် `popcorntime.desktop` အမည်ဖြင့် fileဆောက်လုပ်ရပါမည်။

_(**Nano** အစား မိမိနှစ်သက်ရာ Text Editor ကိုအသုံးပြုနိုင်ပါသည်။)_

`terminal` ထဲတွင် အောက်ပါ command ကိုရိုက်၍ ပြုလုပ်ပါမည်။
```bash
sudo nano /usr/share/applications/popcorntime.desktop
```
ထို့နောက် အောက်ပါ စာကြောင်းများအား ဖြည့်သွင်းရပါမည်။
```bash
[Desktop Entry]
Version = 1.0
Type = Application
Terminal = false
Name = Popcorn Time
Exec = /usr/bin/Popcorn-Time
Icon = /opt/popcorntime/popcorn.png
Categories = Application;
```
ပြီးပါက `Ctrl+X` နှိပ်ပြီး `Y` key ကို `enter` ၍ **Save** ပြုလုပ်ပါ။
ထို့နောက် ဖြည့်သွင်းခဲ့သော `Icon` နေရာတွင်အသုံးပြုမည့် PNG Image ဖိုင်အား အောက်ပါ `command` ကိုရိုက်၍ ဒေါင်းလုတ်ပြုလုပ်ပြီး ထည့်သွင်းရပါမည်။
```bash
sudo wget -O /opt/popcorntime/popcorn.png https://upload.wikimedia.org/wikipedia/commons/d/df/Pctlogo.png
```
**Installation** ပြုလုပ်ခြင်းပြီးဆုံးပါပြီ။
အောက်ပါအတိုင်း Search box မှတဆင့်စတင်အသုံးပြုနိုင်ပါပြီ။

![photo](https://4bds6hergc-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/popcorn-time-ubuntu-menu.jpg "Search Box")

---

__ref:__
- [It's FOSS](https://itsfoss.com/popcorn-time-ubuntu-linux/)
- [LINUX CONFIG]()

