/**
 * =======================================
 * DLC剧情：		选择是否集中返乡 & 辅导员劝返
 * 文件名：			return-or-not
 * 创建日期：		2022-11-15
 * 时间线索引：		DLC【4】 & 【4A】【4A0】【4A1】【4A2】 & 【4B】
 * 写手：			ito
 * 程序演绎：		高
 *
 *
 *  如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump return-or-not
 * （【gao】逻辑上是jump return-or-not，但目前调试的时候需要输入名字，故跳转到return-enter-name，这一块可以再调整）
 * 
 * （2）我也不懂了，请程序员指导TAT
 *
 *  更新：
 * 	221125 【ito】姑且把劝返的对话放了进来，不是太确定语法是否正确。角色立绘和音效之类的我还没细想，需要程序员后续演绎。
 * 			如果程序员已对以上部分进行了优化，请在此条下留言已优化的部分，并且指出待优化的问题，以便后续进一步工作。
 *  221128 【gao】已根据ito的注释进行演绎，加入立绘、背景、音效；
 *         跳转部分：jump到【4B0】老乡群剧情、jump到【END1】留校剧情尚未实现，等待剧情文案编入；
 *         手机界面显示尚未实现，待优化。
 *  221129 【gao】手机界面显示已实现，细节待优化。
 * =======================================
 **/

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'return-needs': {
		title: '群通告',
		subtitle: '',
		body: `
		 <p>【返乡直达城市铁路运输需求紧急统计】 各位同学，目前有返乡需求的同学，文部科学省可安排前往42个城市的直达车辆（仅限铁路运输），费用自理。到达车站的方式：文部科学省安排接驳车辆提供送站服务。</p>
		`
	},
});

monogatari.component ('main-screen').template (() => {
    return `
        <h1>My Awesome Game</h1>
        <main-menu></main-menu>
    `;
});

monogatari.script ({
	/**
	 * ====================================
	 *【4 是否集中返乡】return-or-not剧情如下
	 * ====================================
	 **/
	'return-enter-name':[
		{
			'Input': {
				'Text': '你叫甚么名字?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				// 'Warning': '不说？不说你怎么报到？'
			}
		},
		'jump return-or-not'
	],
		
	'return-or-not': [
	    'show scene dorm',
		's 你收到了一条群聊公告',
		//【播放来信声音】
		'play sound new_message',
		'show character a happy',
		'a {{player.name}}！快看大群！',
		'i 来了来了。',
		//【手机界面】
		/*
		 公告：【返乡直达城市铁路运输需求紧急统计】 各位同学，目前有返乡需求的同学，
		 文部科学省可安排前往42个城市的直达车辆（仅限铁路运输），费用自理。
		 到达车站的方式：文部科学省安排接驳车辆提供送站服务。
		 */
		'play sound notification',
        'show message return-needs',
		//	（ito：其实这里应该找一个相当于教委的文部科学省下辖机构，之后再细想）
		'i 好耶！！！！！ ',
		'i 我是在做梦吗？意思是可以回家了？不用继续关在学校里了？',
		'a 保真！文部省总算是松口了！ ',
		'i 好没实感…… ',
		'show character a normal',
		'a 你打算什么时候回？ ',
		'i 慢着，让我仔细想想…… ',
		//进入选择：返还是不返？
		//播放选项音效
		'play sound choices',
		{
			'Choice': {
				'Dialog': 's 什么时候返乡？',
				'yes': {
					'Text': '当然是越早越好！',
					'Do': 'jump return-yes'
					//此处跳转至【4B 返乡】，return-yes
				},
				'no': {
					'Text': '还是再等等吧？',
					'Do': 'jump return-not'
					//此处跳转至【4A 不返乡】，return-not
				},
			}
		},
	],
	//结束【4】return-or-not剧情，进入选项分支【4B】【4A】

	//分支：【4B 返乡】，return-yes
    'return-yes':[
		'i 当然是越早越好！ ',
		'i 当今的疫情形势简直可称是“一日一策”。 ',
		'i 今天文部省还许你回家，你行李都收拾好了，明天没准又出了什么岔子，一改口说不放人，你不又得原地把行李都开回去？',
		'i 此时不走，只怕是夜长梦多！  ',
		'a {{player.name}}，学生的能力是有极限的。我从漫长的封校生活中学到一件事，',
		'a 越是塔塔开，就越会发现学生的能力是有极限的，除非不待在学校。 ',
		'i 东急！我不玩儿啦！爷润了！ ',
		'show character a happy',
		'a 润啦，哈哈哈哈！',
		'i 这就去填申请！',
		'show character a normal',
		'i ……咦。',
		'i 我发现我老家不在文部省发车的42个城市之中啊？是说我回不了了吗？该不会是空欢喜一场……',
		'a 别急。总不能因为你不在铁道运送范围内，就不让你返了吧？',
		'a 你忘了？东急可是铁道大校，润算什么事儿？润，乃是东急的传统艺能。',
		'a 我看见学院里有人在拉老乡群，里面个个都是润学人才，你不妨找找组织？',
		'i 妙啊！',
		//'jump groupchat'
		//上面这行是我暂时写的，因为我不确定老乡群的英文名金桔会取什么，需要等金桔定了之后再去掉双杠
		//jump到【4B0】老乡群剧情
	],
	//结束【4B 返乡】return-yes剧情，进入【4B0】老乡群剧情

	//分支：【4A 不返乡】，return-not
	'return-not':[
		'i 还是先不提交返乡申请了吧。已经临近期末了，要准备期末结课，本身就够烦心的了，回去的话，还要在地转运、隔离，实在是吃不消……',
		'show character a sad',
		'a 也是。偏偏返乡时间和期末对冲……',
		'i 起码等期末结束变得轻松一点之后，再返乡不迟。',
		'a 好吧。但是我可不想再继续待下去了，哪怕麻烦一些，我也宁愿回去。',
		'hide character a',
		's 你收到了辅导员的信息',
		//【显示聊天窗口】
		//ito：如果能在手机窗口中显示对话效果应该会好些如果不行的话就用普通对话框。
		//【播放提示音】
		'play sound new_message',
//		'fdy {{player.name}}，最近文部省放宽了返乡限制，你有没有打算回家呀？',
//		'i 老师，近期期末临近，学业比较繁重。我还是打算再等一阵儿，把返乡时间和期末错开，集中精力完成学业。',
//		'fdy 学业忙，老师都很理解。不过还是建议你趁现在返乡吧。',
//		'fdy 接下来这一周是文部省给学生争取出来的时间窗口，这段时间专门向咱们高校学生开放售票，保证想回家的学生都能回家。',
//		'fdy 过了这一周，整个铁道系统就会面向东京市民全面开放，',
//		'fdy 到时候所有市民可都会涌进售票系统，学生想买票也不一定买得着了。错过了这个窗口，想要再回家就很难了。',
//		'fdy 你想好了吗？确定不返乡吗？',
        'nvl <div class="chat-panel"> <div class="chat-head" style="color:white"> <h6>辅导员</h6> </div> <div class="content-left chat-message" style="color:#000000"> {{player.name}}，最近文部省放宽了返乡限制，你有没有打算回家呀？ </div> <div class="content-right chat-message" style="color:#000000"> 老师，近期期末临近，学业比较繁重。我还是打算再等一阵儿，把返乡时间和期末错开，集中精力完成学业。 </div> <div class="content-left chat-message" style="color:#000000"> 学业忙，老师都很理解。不过还是建议你趁现在返乡吧。 </div> <div class="content-left chat-message" style="color:#000000"> 接下来这一周是文部省给学生争取出来的时间窗口，这段时间专门向咱们高校学生开放售票，保证想回家的学生都能回家。 </div> <div class="content-left chat-message" style="color:#000000"> 过了这一周，整个铁道系统就会面向东京市民全面开放， </div> <div class="content-left chat-message" style="color:#000000"> 过到时候所有市民可都会涌进售票系统，学生想买票也不一定买得着了。错过了这个窗口，想要再回家就很难了。 </div> <div class="content-left chat-message" style="color:#000000"> 你想好了吗？确定不返乡吗？ </div></div>',
		//【结束聊天窗口】
		'i 刚才辅导员给我发消息，说此时不返，我就将和万千东京居民激情竞争，为了珍贵的返乡机会……',
		'show character a normal',
		'a 这是什么饥饿营销？',
		'i 辅导员这么一说，我又有点拿不准主意了。',
		'hide character a',
		//进入选择：真的不返吗？
		//播放选项音效
		'play sound choices',
		{
			'Choice': {
				'Dialog': 's 什么时候返乡？',
				'yes': {
					'Text': '还是返吧，我不想在东急继续受苦',
					'Do': 'jump persuade-agree'
					//此处跳转至【4A2 返】，persuade-agree
				},
				'no': {
					'Text': '我还是想在学校专心学习……',
					'Do': 'jump persuade-disagree'
					//此处跳转至【4A1 仍然不返】，persuade-disagree
				},
			}
		},
	],
	//结束【4A 不返乡】return-not剧情，进入分支选项【4A1】【4A2】

	//分支：【4A2 返】，persuade-agree
    'persuade-agree':[
		//【显示和辅导员的聊天窗口】
		//ito：如果能在手机窗口中显示对话效果应该会好些如果不行的话就用普通对话框。
		//【播放提示音】
		'play sound new_message',
		`nvl <div class="chat-panel"> 
		<div class="chat-head" style="color:white"> <h6>辅导员</h6> </div> 
		<div class="content-right chat-message" style="color:#000000"> 老师，我想了想，还是返乡吧。 </div>
		<div class="content-right chat-message" style="color:#000000"> 我这就去填返乡申请，之后辛苦学院老师审核一下了。 </div>
		<div class="content-left chat-message" style="color:#000000"> 没事的，不辛苦。我们也希望同学们能回家过得好一点。 </div> </div>`,
//		'i 老师，我想了想，还是返乡吧。',
//		'i 我这就去填返乡申请，之后辛苦学院老师审核一下了。',
//		'fdy 没事的，不辛苦。我们也希望同学们能回家过得好一点。',
		//【窗口结束】
		'i 虽然说填写了返乡申请，但仔细一想，怎么返还是个问题呢……',
		'i 我的老家不在文部省可安排返乡的42个城市之一，现在的出东京的铁道系统运营状况和其他各地应该如何实现闭环管理，我心里一点数都没有……',
		'show character a normal',
		'a 确实。文部省只是松口同意学生返乡，',
		'a 可是具体怎么返，各地返乡政策如何，是否提供相应的保障……这些信息都散落在各个平台上，',
		'a 要靠我们自己零零散散地去拼凑起来，去自己组织一个返乡对策。',
		'i 而且哪怕同一地区不同部门的口径都不一定一样呢（苦笑）',
		'a 朋友，或许你听说过老乡群吗？',
		'i 是那个当时集中收集返乡信息，但是出师未捷身先死的老乡群？',
		//ito：可以低明度闪回s1中老乡群的部分对话场景，唤起玩家对老乡群的回忆
		'i 哈哈！咱们这不是都形成自己的情报网络了嘛。老乡群，走起！',
		//'jump groupchat'
		//上面这行是我暂时写的，因为我不确定老乡群的英文名金桔会取什么，需要等金桔定了之后再去掉双杠
		//jump到【4B0】老乡群剧情
	],
	//结束【4A2 返】persuade-agree剧情，进入【4B0】老乡群剧情

	//分支：【4A1 仍然不返】，persuade-disagree
	'persuade-disagree':[
		//【显示和辅导员的聊天窗口】
		//ito：如果能在手机窗口中显示对话效果应该会好些如果不行的话就用普通对话框。
		//【播放提示音】
		'play sound new_message',
//		'i 老师，感谢您的好意，不过我还是想留在学校，我没信心能一边在返乡路途上辗转一边准备期末结课……',
//		'fdy 好吧，没关系。在学校也要注意劳逸结合！',
//		'i 好的，谢谢老师。',
		`nvl <div class="chat-panel"> <div class="chat-head" style="color:white"> <h6>辅导员</h6> </div>
		<div class="content-right chat-message" style="color:#000000"> 老师，感谢您的好意，不过我还是想留在学校，我没信心能一边在返乡路途上辗转一边准备期末结课……, </div>
		<div class="content-left chat-message" style="color:#000000"> 好吧，没关系。在学校也要注意劳逸结合！ </div>
		<div class="content-right chat-message" style="color:#000000"> 好的，谢谢老师。 </div> </div>`,
		//'jump ending1-until-july'
		//上面这行是我暂时写的，需要等和后续后续定了之后再去掉双杠
		//jump到【END1】留校剧情
	],
	//结束【4A1 仍然不返】，persuade-disagree，进入【END1】留校到七月底

});
