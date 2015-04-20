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
name: KoKoYe
position: Member
imgName: kokoye.jpg
social:
  - twitter: kokoye2007
    website : www.ubuntu.net
    mail : kokoye2007@gmail.com
    facebook : kokoye2007
    gplus : +KoKoYe
    github: kokoye2007

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

## Finished ??

``` github
git status
git add --all
git commit -a -m "member add"
git push origin master
```
Please pull request <3 