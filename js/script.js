/* global monogatari */


/**
 * =======================================
 * 
 * Monogatari框架的基础设定
 * 
 * =======================================
 **/


// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Day-start': {
		title: '第{{player.day}}天',
		subtitle: '看看你的状态和物品如何',
		body: `
			<p>健康={{player.health}} 精神={{player.sanity}} 学业={{player.study}}</p>
			<p>物资x{{player.food}}</p>
			<p>记得第11天要考试，届时学业值要大于零哦~</p>
		`
	},

});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: '欢迎',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	'联系方式': 
		`
		<h3>联系方式</h3>
		<p>如果大家遭遇过类似的故事，欢迎向开发者团队投稿，一经采用，您的故事将成为游戏剧情的一部分！</p>
		<p>感兴趣的网友可直接将您或周边朋友的亲身经历发送邮件到邮箱:</p>
		<p><u>reiwajidai@protonmail.com</u></p>
		<p>您也可以通过Github关注或加入游戏的开发</p>
		<a href='https://github.com/reiwajidai'><u>Click to visit Github page</u></a>
		<p>東京求生记·完整版及dlc正在同步制作中！敬请期待！</p>
		<p>-</p>
		`
	,
	'制作名单':
		`
		<h3>制作名单</h3>
		<p><b>PRODUCER</b></p>
		<p>レイワジダイ株式会社</p>
		<p><b>STORY</b></p>
		<p>千葉ハルキ, 淀川ニンニク, おおさくゆめ</p>
		<p><b>GAME ENGINE</b></p>
		<p>Monogatari, D3 JS</p>
		<p><b>PROGRAM</b></p>
		<p>2号機, 千野キノ, 鳥山 湖辺斎, 太作夢</p>
		<p><b>GRAPHICS</b></p>
		<p>Kohensai Toriyama, 岡田茂のAI, にんにく</p>
		<p><b>MUSIC & SFX</b></p>
		<p>渡辺徹, ガレージバンド, Miho Araki, Kino Chino</p>
		<p><b>TESTING</b></p>
		<p>オカダの友, ヨウイチ, Haruki Chiba, 東野澪子</p>
		<p><b>PROMOTION</b></p>
		<p>津門ゆうじ</p>
		<p><b>EATING WATERMELONS</b></p>
		<p>無敵ドラゴン戦神, ユリシス</p>
		<p><b>SPECIAL THANKS</b></p>
		<p>佐藤アオイ, savage</p>
		<p></p>
		`
	,
	'Copyright Notice':
		`
		<h3>版权声明</h3>
		<h4>Taising Survival</h4>
		<p>MIT License</p>
		<p>Copyright (c) 2022 reiwajidai</p>
		<p>
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		</p>
		<p>The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.
		</p>
		<p>
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
		</p>
		<h4>D3.js</h4>
		<p>Copyright 2010-2023 <a href="https://observablehq.com/@mbostock"><u>Mike Bostock</u></a></p>
		<p>
		Permission to use, copy, modify, and/or distribute this software for any purpose
		with or without fee is hereby granted, provided that the above copyright notice
		and this permission notice appear in all copies.
		</p>
		<p>
		THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
		REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
		FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
		INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
		OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
		TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
		THIS SOFTWARE.
		</p>
		`
	,
});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'normal': 'bgm_normal.mp3',
	'normal2': 'bgm_normal2.mp3',
	'internationale': 'bgm_internationale.mp3',
	'sad': 'bgm_sad.mp3',
	'crowd': 'bgm_crowd.mp3',
	'good_ending': 'good_ending.mp3',
	'bad_ending': 'bad_ending.mp3',
	'normal_ending': 'normal_ending.mp3',
	
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'choices': 'choices.mp3',
	'click_button': 'click_button.mp3',
	'envelope_unfold': 'envelope_unfold.mp3',
	'knocking_door': 'knocking_door.mp3',
	'meow': 'meow.mp3',
	'new_gallery': 'new_gallery.mp3',
	'new_message': 'new_message.mp3',
	'new_day': 'next_day.mp3',
	'notification': 'notification.mp3',
	'ringtones': 'ringtones.mp3',
	'typing': 'typing.mp3',
	'alarm': 'alarm.mp3',
	'buzzer': 'buzzer.mp3',
	'stats_up': 'stats_up.mp3',
	'stats_down': 'stats_down.mp3',
	'metal_bend': 'metal_bend.mp3',
	'cicada': 'cicada.mp3',
	'wind_winter': 'wind_winter.mp3',
	'bird': 'bird.mp3',
	'footsteps': 'footsteps.mp3',
	
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'gate': 'gate.png',
	'street': 'street.png',
	'dorm': 'dorm.png',
	'laptop': 'laptop.png',
	'balcony': 'balcony.png',
});


// Define the Characters
monogatari.characters ({
	'i': {
		name: '{{player.name}}',
		color: 'rgb(234, 131, 0)',
	},
	's': {
		name: '',
		color: '#000000',
	},
	//整活人设：相对情绪化，容易被带动，精力充沛
	'a': {
		name: '冈田 茂（室友）',
		color: '#ff6666',
		directory:'mateA',
		sprites:{
			normal:'normal.png',
			angry:'angry.png',
			sad:'sad.png',
			happy:'happy.png',
		},
		expressions:{
			normal:'expressions/normal.png',
			angry:'expressions/angry.png',
			sad:'expressions/sad.png',
			happy:'expressions/happy.png',
		},
		// default_expression: 'normal',
	},
	'fdy': {
			name: '辅导员',
			color: '#00cc33',
		},

});


/**
 * =======================================
 * 
 * 各种自定义函数的集散地
 * 
 * =======================================
 **/


// 判断结局
monogatari.$('ending_trigger', {
    'Conditional': {
        'Condition': function(){
            const {sanity} = monogatari.storage('player');
            const {health} = monogatari.storage('player');
            if(sanity <= 0) {
                return "End pdf";
            } else if (health <= 0) {
                return "End sick";
            } else {
                return 'Other';
            }
        },
        'End pdf': 'jump ending-pdf',
        'End sick': 'jump ending-positive',
        'Other': 'next',
    }
});

// 进入下一天
monogatari.$('next_day', {
	'Function':{
        'Apply':function(){
            const {day} = monogatari.storage('player');
            monogatari.storage({
                player:{
                    day: day + 1
                }
            });
            //monogatari.run("show canvas stats");
            // 不用以上语句，以上语句在回滚的时候会报错，而且是uncaught error
            monogatari._actions[0]._configuration.objects.stats.props.drawText();
        },
        'Reverse':function(){
            const {day} = monogatari.storage('player');
            monogatari.storage({
                player:{
                    day: day - 1
                }
            });
            monogatari._actions[0]._configuration.objects.stats.props.drawText();
        },
	}
});

// 显示画廊
// monogatari.$('show-gallery', 'nvl <gallery-screen class="animated active vertical horizontal--high middle text--center" data-component="gallery-screen" data-screen="gallery"></gallery-screen>'
// );

/**
 * =======================================
 * 
 * 故事线
 * 
 * =======================================
 **/


monogatari.script ({
	// The game starts here.
	'Start': [
		'jump return-enter-name',
	],

	'ending': [
		'end',
	],
	
});