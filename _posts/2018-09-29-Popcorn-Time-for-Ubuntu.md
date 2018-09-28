---
layout: post
title:  "How to Install Popcorn Time on Ubuntu!"
date:   2018-09-29 12:35:00
categories: Ubuntu
---
# ***Popcorn Time for Ubuntu*** !

![icon](https://upload.wikimedia.org/wikipedia/commons/d/df/Pctlogo.png "Popcorn Time for Ubuntu")

Popcorn Time သည္ **_Netflix_** ကိုမွီျငိမ္းထားေ
သာ **torrent** streaming applicton ျဖစ္သည္။
၎သည္ **open source application** တစ္ခုျဖစ္၏။

၎၏အားသာခ်က္မွာ ပံုမွန္ကဲ့သို႔ **torrent** video မ်ားအား ေဒါင္းလုတ္ျပဳလုပ္ခ်ိန္ကိုေစာင့္ဆိုင္းျပီးမွသာ ၾကည့္ရႈရျခင္းမ်ိဳးမဟုတ္ဘဲ **_YouTube_**, **_Netflix_**, **_openload_** တို႔ကဲ့သို႔ တိုက္ရိုက္နီးပါး ***stream*** ၾကည့္ရႈႏိုင္ျခင္းျဖစ္သည္။ ပို၍ေကာင္းမြန္ေသာ အခ်က္မွာ **ေၾကာ္ျငာ** မ်ားမပါရွိျခင္းျဖစ္သည္။
၎တြင္ Movies, TV series, Anamie အစရွိသျဖင့္က႑မ်ား စံုလင္စြာပါရွိပါသည္။
သို႕ေသာ္ အားနည္းခ်က္မွာမူ **torrent** ကိုအသံုးျပဳထားသျဖင့္ ထပ္ဆင့္ေပးပို႔သူ(seeds)နည္းေသာ Moviesမ်ားအတြက္ အဆင္ေျပေကာင္းမြန္စြာၾကည့္ရႈနုိင္မည္မဟုတ္ပါ။
Seedsနည္းေသာ Moviesမ်ားကို ၎တြင္ပါရွိေသာ**Magnet link**မွတဆင့္ `qbittorrent` ကဲဲ့သို႔ေသာ torrent software application မ်ားျဖင့္ ေဒါင္းလုတ္ျပဳလုပ္နုိင္ပါေသးသည္။
Seeds လံုး၀မရွိေသာ ဖိုင္မ်ားကိုမူ ေဒါင္းလုတ္ရယူနုိင္မည္မဟုတ္ပါ။

>သတိျပဳရန္အခ်က္မွာ အခ်ိဳ႕နုိင္ငံမ်ားတြင္ Torrent အသံုးျပဳမႈကို ဥပေဒအရ တင္းၾကပ္စြာတားျမစ္ထားသည္ျဖစ္၏။ သို႔ျဖစ္ပါ၍ Popcorn Time အားအသံုးျပဳမည္ဆိုပါက မိမိေနထိုင္သည့္နိုင္ငံ၏ ဥပေဒသက္ေရာက္မႈမ်ားျဖင့္ ဆင္ျခင္အသံုးျပဳရန္လိုအပ္ပါသည္။
အျခားနည္းလမ္းအားျဖင့္ [ivacy](https://www.ivacy.com/buy-vpn/) ကဲ့သို႔ေသာ Torrent အသံုးျပဳမႈအတြက္ရည္ရြယ္၍ ၀န္ေဆာင္မႈေပးသည့္ VPN မ်ားကိုတြဲဖက္အသံုးျပဳသင့္ပါသည္။ 

Popcorn Time တြင္မ်ားစြာေသာ ဆင္တူdomains မ်ားလည္းရွိသည္။
ေအာက္တြင္ျပထားေသာ ပံုတြင္ၾကည့္နိုင္ပါသည္။



![photo](https://pbs.twimg.com/media/CiANgO8XEAETorA.jpg "Popcorn Time infographic")

---

## **Popcorn Time Installation ျပဳလုပ္ျခင္း**


## **အဆင့္ ၁**

ဦးစြာ ယခု [လင့္](https://popcorntime.sh/linux) သို႕သြား၍ မိမိအသံုးျပဳေသာ linux system၏ architecture အမ်ိဳးအစားကိုေရြးခ်ယ္ျပီး ေဒါင္းလုတ္ရယူပါ။ 
ထို႔ေနာက္ installationျပဳလုပ္ရာတြင္ Data files မ်ားထားသိုရန္ system root ေအာက္ရွိ `/opt` Directoryထဲမွာ ေအာက္ပါ **command** ျဖင့္ Directory အသစ္ေဆာက္ပါ​မည္။
```bash
sudo mkdir /opt/popcorntime
```

ေဒါင္းလုတ္ရယူထားေသာ Homeေအာက္ရွိ Downloads Directory ေအာက္သို႕သြားပါမည္။ 
```bash
cd ~/Downloads
```
ယခင္ ေဒါင္းလုတ္ျပဳလုပ္ထားေသာ Popcon Time tar.xz archive ဖိုင္အား ေအာက္ပါ **command** ျဖင့္ အသစ္ေဆာက္လုပ္ထားသည့္ `opt/popcorntime` Directory ေအာက္သို႔ ျဖည္ခ်ထည့္သြင္းပါမည္။
sudo tar Jxf Popcorn-Time-* -C /opt/popcorntime

##  **အဆင့္ ၂**

ဆက္လက္၍ **Popcorn Time** အား Systemအတြင္းရွိ မိမိနွင့္တကြ အျခားUsersမ်ားမွ **command**ျဖင့္ ေခၚယူအသံုးျပဳနိုင္ေအာင္ ျပဳလုပ္ပါမည္။
```bash
ln -sf /opt/popcorntime/Popcorn-Time /usr/bin/Popcorn-Time
```
## **အဆင့္ ၃**
ေယဘူယ်အားျဖင့္ **Popcorn Time Installation** ျပီးေျမာက္ပါျပီ။ သို႔ေသာ္ `terminal` မွမဟုတ္ဘဲ Desktop Application အေနျဖင့္ **Application Menu** မွအသံုးျပဳနိုင္ေအာင္ ျပဳလုပ္ပါမည္။ 
၎အတြက္ **Desktop Entry** ျပဳလုပ္ဖို႕လိုပါသည္။
ဦးစြာ **Nano text editor** ကိုအသံုးျပဳ၍ `/usr/share/applications` Directory ထဲတြင္ `popcorntime.desktop` အမည္ျဖင့္ fileေဆာက္လုပ္ရပါမည္။

_(**Nano** အစား မိမိႏွစ္သက္ရာ Text Editor ကိုအသံုးျပဳနိုင္ပါသည္။)_

`terminal` ထဲတြင္ ေအာက္ပါ command ကိုရိုက္၍ ျပဳလုပ္ပါမည္။
```bash
sudo nano /usr/share/applications/popcorntime.desktop
```
ထို့႔ေနာက္ ေအာက္ပါ စာေၾကာင္းမ်ားအား ျဖည့္သြင္းရပါမည္။
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
ျပီးပါက `Ctrl+X` နွိပ္ျပီး `Y` key ကို `enter` ၍ **Save** ျပဳလုပ္ပါ။
ထို႔ေနာက္ ျဖည့္သြင္းခဲ့ေသာ `Icon` ေနရာတြင္အသံုးျပဳမည့္ PNG Image ဖုိင္အား ေအာက္ပါ `command` ကိုရိုက္၍ ေဒါင္းလုတ္ျပဳလုပ္ျပီး ထည့္သြင္းရပါမည္။
```bash
sudo wget -O /opt/popcorntime/popcorn.png https://upload.wikimedia.org/wikipedia/commons/d/df/Pctlogo.png
```
**Installation** ျပဳလုပ္ျခင္းျပီးဆံုးပါျပီ။
ေအာက္ပါအတိုင္း Search box မွတဆင့္စတင္အသံုးျပဳနိုင္ပါျပီ။

![photo](https://4bds6hergc-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/popcorn-time-ubuntu-menu.jpg "Search Box")

---

__ref:__
- [It's FOSS](https://itsfoss.com/popcorn-time-ubuntu-linux/)
- [LINUX CONFIG]()

