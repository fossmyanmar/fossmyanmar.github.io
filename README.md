# FOSS MYANMAR

### First 

Ford Repository to your account and git pull to your pc.

copy and paste following code in Terminal to get this repository.

``` github

git clone https://github.com/fossmyanmar/fossmyanmar.github.io.git 

```
### Add Member

Member အသစ္တေယာက္ထည့္ဖုိ့ အတြက္ `_data` ထဲက `member` ဖိုဒါထဲမွာ text ဖိုင္အသစ္တစ္ခုထပ္ထပ္ျပီး ေအာက္ပါပံုစံအတုိင္း ေရးျပီးေတာ့ member နာမည္ႏွင့္ ( kokoye.yml) အမည္ေပးရင္ ေရွ ့မွာ ေပၚပါျပီ။ ( အေကာင္းဆံုးကေတာ့ တစ္ဖိုင္ကူးပိး နာမည္ေျပာင္းထည့္လဲရပါတယ္ )

```yml

team : Ubuntu Myanmar Loco Team
teams : FOSS Myanmar, Ubuntu Myanmar Loco Team 
name : Ko Ko Ye` 
email : kokoye2007@gmail.com 
photo : ko-ko-ye.png 
facebook : https://facebook.com/kokoye2007 
twitter : https://twitter.com/kokoye2007 
github : https://github.com/kokoye2007 
linkedin : https://linkedin.com/in/kokoye2007 
os : Ubuntu 
```

### Add Member Picture

(၁)ဓါတ္ပံုဆိုဒ္မွာ  600X600 pixel ျဖစ္ရပါမယ္။


(၂) ဓါတ္ပံု၏ နာမည္ကုိ `_data/member/{name.yml}` ထဲမွာ ထည့္ထားတဲ့ imgName နဲ့ တူတူေပးျပီးေတာ့ ဓါတ္ပံုကုိ `images/members` ထဲထည့္ရပါမယ္။


### Add Events 

Event အသစ္တစ္ခုထည့္ဖုိ့က ေအာက္က ပံုစံအတုိင္းကုိ `_data` ထဲက event ဖိုဒါထဲက သက္ဆုိင္ရာ(events_ubuntu.json သို ့မဟုတ္ events_fedora.json) ထဲမွာထည့္ေပးရင္ ေရွ ့မွာ ေပၚပါလိမ့္မယ္။

```json
{  
	"name"	: "Ubuntu For Myanmar",
	"description" : "For Share ubuntu knowledge",
	"link": "http://ubuntu-mm.net",
	"date"	: "2 FEB 2013 to 3 FEB 2013",
	"contact": "kokoye2007@gmail.com",
	"address" : "CCT Office",
	"eventPhoto": "1907.jpg",
},
```
### Add Event Photo

Event ဓါတ္ပံုထည့္ဖုိ့ အတြက္က images/events ထဲက (fedora/uformm) ထဲမွာ အေပၚမွာ ျဖည့္ထားတဲ့ eventPhoto နဲ့ အတူတူ နာမည္ေပးျပီး သိမ္းရပါမယ္။

## Add New Team
Team အသစ္တစ္ခု ျပဳလုပ္ဖုိ ့အတြက္ '_data/team' ထဲက 'teams.json' ထဲမွာ ေအာက္က ပံုစံအတုိင္း ကူးထည့္ျပီး စားပဲေျပာင္းျပီး သိမ္းလိုက္ရင္ ဆင္ေျပပါျပီ။ 
( အဲဒီမွာ ထည့္ထားတဲ့ id က member မွာ ထည့္ထားနဲ့ 'team : {#1}' ဆိုျပီးနဲ့ ျပန္သံုးပါတယ္ )

```json
  
{  
	"id"	: 1,
	"name"	: "Ubuntu Myanmar Loco Team",
	"address" : "",
	"leader"   : "KOKOYE",
	"contact " : "09450022022"
},

```

### Add New Blog Post

ဒီမွာ post တင္ဖုိ ့က  `_posts` ထဲမွာ ဖိုင္ေလးေတြ ေဆာက္ျပီး သြားထည့္ေပးရမွာပါ။
အဲဒီအတြက္ ပထမဆံုး `_posts` ထဲမွာ ေအာက္က နာမည္ နမူနာအတုိင္း အသစ္တစ္ခုလုပ္လုိက္ပါ။
(LRC-Linux-Resource-Center-Resource-to-Door) အတိုင္း `-` ကုိ space အစား ထိုးသံုးရမွာပါ။

```
 2015-04-20-LRC-Linux-Resource-Center-Resource-to-Door.md
```   
ျပီရင္ေတာ့ ေအာက္က ပံုစံအတုိင္း အသစ္ေဆာက္ထားတဲ့ဖိုင္ထဲကုိ ကူးထည့္ျပီး လုိအပ္တာေတြကုိ ေရးလိုက္ရင္ ရပါျပီ ။
post ေရးရာမွာ markdown format နဲ့ေရးရမွာျဖစ္ပါတယ္။

```
---
layout: post
title:  "LRC – Linux Resource Center Resource to Door!"
date:   2015-04-20 14:35:13
categories: LRC
---


**LRC** ဆိုတာကို ဘယ္သူေတြ မွတ္မိလဲ။
စကားမစပ္ LRC – Local Resources Centre (Myanmar)​ လဲ LRC လို႔ေခၚတယ္။ အဲတာကို ေျပာတာမဟုတ္ပါဘူး။

အရင္တုန္းက ကြ်န္ေတာ္တို႔ Linux Resource Center ဆိုၿပီး လုပ္ခဲ့ၾကတာပါ။
မိမိႏွစ္သက္ရာ OS ကို National CD မွာေတာင္ ဝယ္မရတဲ့ အေျခအေနမွာ မွ်ေဝဖို႔ ႀကိဳးစားခဲ့ၾကတာေပါ့။

အခုေခတ္မွာေတာ့ Ubuntu ေခြ Fedora ေခြ CentOS ေခြ RedHat ေခြေတြကို လြယ္လြယ္ကူကူ ဝယ္လို႔ရေနပါၿပီ။ ဒါေပမယ့္ Update မျဖစ္တာ Architect မစုံတာ သူတို႔ မသိပါဘူး။ version အစုံလည္း မရွိပါဘူး။ Video Tutorial ေတြ Guide ေရးေပးတဲ့ Website ေတြ Wiki ေတြဆိုတာလည္း အင္တာနက္ရမွ အသုံးျပဳႏိုင္တာပါ။ ဒီအတြက္ LRC ရွိမယ္ဆိုရင္ ဒါေတြကို Internet Traffic မရွိပဲ သုံးႏိုင္ပါလိမ့္မယ္။

အဲအတြက္
LRC ေလးေတြ ျပန္လုပ္ရင္ ေကာင္းမလား
LRC ေတြလုပ္မယ္ဆိုရင္

- ၁) Storage အတြက္ External HDD ေတာ့ အနည္းဆုံး ကုန္က်ပါမယ္။ Internet ဆိုင္လို ေကာ္ဖီဆိုင္လိုေနရာေတြက ဝိုင္ဖိုင္ေတြဆိုရင္ ပါဝင္ဖြင့္ထားတဲ့အခ်ိန္ရပါမယ္။
- ၂) File Server လိုထားမယ္ဆိုရင္ Pi ထပ္လိုပါမယ္။
- ၃) ဆိုင္ေတြ ေနရာေတြက လက္ခံသလား တာဝန္ယူသလား ပူးေပါင္းပါဝင္ ကူညီမလား ဆိုတာရွိပါတယ္။


သို႔မဟုတ္
Door 2 Door Delivery လုပ္မလား စဥ္းစားရပါမယ္။
အိမ္တိုင္ရာေရာက္ ပို႔ေပးၿပီး တေခြကို ၁၀၀၀ ထက္မပိုတဲ့ႏႈန္းနဲ႔ အျမန္ဆုံးပို႔ေပးႏိုင္ဖို႔ ႀကိဳးစားၾကည့္ၾကပါမယ္။

LRC ရဲ႕ အားသာခ်က္က LRC ရွိတဲ့ ေနရာေတြ ေၾကျငာထားမွာျဖစ္လို႔ ႀကဳံတဲ့ေနရာ ဝင္ၿပီး ယူသြားယုံပါပဲ။ ကုန္က်စားရိတ္ကို LRC နဲ႔ ဆိုင္ေတြဘက္က က်ခံရပါလိမ့္မယ္။

D2D ရဲ႕ အားသာခ်က္က စားရိတ္အမ်ားႀကီး မကုန္ပဲ အိမ္တိုင္ရာေရာက္ ပို႔ေပးပါလိမ့္မယ္။ ကုန္က်စားရိတ္ကို အသုံးျပဳသူက က်ခံရပါလိမ့္မယ္။ အားနည္းခ်က္ကေတာ့ နယ္ကလာတဲ့လူဆိုရင္ LRC က အဆင္ေျပတဲ့အခ်ိန္ေလး လမ္းႀကဳံဝင္ယူသြားရုံပါပဲ။ D2D ဆိုရင္ လက္ခံမယ့္ အိမ္ေတြ ေငြေခ်ေပးမယ့္ လူေတြ လိုအပ္ေနပါလိမ့္မယ္။

တကယ္လို႔ တခုခုက ပိုေကာင္းတဲ့ အေၾကာင္းျပခ်က္ရွိရင္ ဒီဟာေတြထက္ ေကာင္းတဲ့ အႀကံရွိရင္ ေပးေစခ်င္ပါတယ္။ LRC လုပ္ဖို႔ကို စိတ္ဝင္စားတဲ့လူေတြရွိတယ္ဆုိလည္း ဘယ္အပိုင္းက ဘယ္လိုကူညီေပးႏိုင္တယ္ဆိုတာေလးပါ ေရးခဲ့ေပးႏိုင္ပါတယ္။

![Foss Myanmar Events at BarCamp Yangon 2015]({{ site.url }}images/slide1.jpg "Foss Myanmar Events at BarCamp Yangon 2015")

```
## Finished ??

``` github
git status
git add --all
git commit -a -m "member add"
git push origin master
```
Please pull request <3 
