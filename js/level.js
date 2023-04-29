class LevelScreen extends Monogatari.ScreenComponent {

    static setup () {
        this.engine.translation('English', {
            Level: 'Level'
        });
        this.engine.translation('简体中文', {
			Level: '开始游戏'
		});
        return Promise.resolve ();
    }

    static bind () {
        this.engine.component ('main-menu').addButtonAfter ('Start', {
            string: 'Level',
            data: {
                action: 'open-screen',
                open: 'level'
            }
        });
        return Promise.resolve ();
    }

    constructor (...args) {
        super(...args);
    }

    onStateUpdate (property, oldValue, newValue) {
		super.onStateUpdate (property, oldValue, newValue);

		// Update the level screen when a level gets unlocked or locked
		this.forceRender ();

		return Promise.resolve ();
	}

    render () {
        let storyHtml = `
            <img-filter style='position:absolute; left:0%; 
                            top:0%; width:100%; height:100%;
                            '></img-filter>
            <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
            <h2 data-string="Level">故事线</h2>
            <div data-content="levels">
        `;

        storyHtml += addArrows();

        flowChartData.forEach((d, i) => {
            // Draw button
            if (check_level(d.id)){
                // console.log(d.id);
                if (d.img == ""){
                    storyHtml += `
                        <img-container style='position:absolute; left:${d.x - buttonWidthRatio/2}%; 
                        top:${d.y - buttonHeightRatio/2}%; width:${buttonWidthRatio}%; height:${buttonHeightRatio}%;
                        background-color: grey;' 
                        button-type="normal"></img-container>`;
                }
                else{
                    storyHtml += `
                        <img-container style='position:absolute; left:${d.x - buttonWidthRatio/2}%; 
                        top:${d.y - buttonHeightRatio/2}%; width:${buttonWidthRatio}%; height:${buttonHeightRatio}%;
                        background-image: url("${d.img}"); background-position: center; 
                        background-repeat: no-repeat; 
                        background-size: cover;' 
                        button-type="normal"></img-container>`;
                }
                storyHtml += `
                    <button data-action=${d.id} style='position:absolute; left:${d.x - buttonWidthRatio/2}%; 
                    top:${d.y - buttonHeightRatio/2}%; width:${buttonWidthRatio}%; height:${buttonHeightRatio}%;' 
                    button-type="normal">${d.text}</button>`;
            }else{
                storyHtml += `
                <img-container style='position:absolute; left:${d.x - buttonWidthRatio/2}%; 
                top:${d.y - buttonHeightRatio/2}%; width:${buttonWidthRatio}%; height:${buttonHeightRatio}%;
                ' 
                button-type="normal"></img-container>
                <button data-action=${d.id} style='position:absolute; left:${d.x - buttonWidthRatio/2}%; 
                top:${d.y - buttonHeightRatio/2}%; width:${buttonWidthRatio}%; height:${buttonHeightRatio}%;' 
                button-type="locked">404</button>`;
            }
        });
        storyHtml += "</div>";  // the end of <div data-content="levels"> 
        return storyHtml

    }
}

LevelScreen.tag = 'level-screen';

$_ready (() => {
    flowChartData.forEach((d, i) => {
        monogatari.registerListener (`${d.id}`, {
            callback: (event) => {
                enterLevel(d.id)
            }
        });
    })
})

function goToLevelScreen(){
    monogatari.global('playing', false);
    monogatari.showScreen ('level');
}

function enterLevel(levelId){
    if(localStorage.getItem(levelId) =='1')
    {
        monogatari.global ('playing', true);
        monogatari.showScreen ('game');
        monogatari.run (`jump ${levelId}`);
        switch(levelId){
            case 'E60-BE':
                setTextBoxCSS(textBoxDefault);
                break;
            default:
                break;
        }
    }
}

function addArrows(){
    // Set up the SVG container
    const svg = d3.create("svg")
        .attr("width", "100%")
        .attr("height", window.innerHeight);

    flowChartData.forEach((d, i) => {
        // Draw arrow
        if (d.next) {
            d.next.forEach((nextTarget, k) => {

                const nextNode = flowChartData.find(node => node.id === nextTarget);
                const nextX = nextNode.x;
                const nextY = nextNode.y;

                const arrow = svg.append("line")
                    .attr("x1", `${d.x}%`)
                    .attr("y1", `${d.y+ buttonHeightRatio/2}%`)
                    .attr("x2", `${nextX}%`)
                    .attr("y2", `${nextY- buttonHeightRatio/2}%`)
                    .attr("stroke", "grey")
                    .attr("stroke-width", 2)
                    .attr("marker-end", "url(#arrowhead)");
            })
        }
    });

    // Define arrowhead marker
    svg.append("defs")
    .append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 10)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
    .attr("fill", "grey");

    return svg.node().outerHTML;
}

/**
* =======================================
* 故事线树形结构
* 
* id，需要与各个剧情脚本中unlock()函数里的字符串保持一致，否则关卡将无法正确解锁
* x,y 是百分比单位
*              
* =======================================
**/
const flowChartData = [
    {x:50, y:10, id: "return-enter-name", text: "返校抉择", img: "", next: null},
    // {x:50, y:35, id: "level-E6-second", text: "宫墙绿柳红砂 2", img: "./assets/gallery/E6_end_brick.png", next: ["level-E6-brick", "level-E6-hermit", "level-E6-fire"]},
    // {x:23, y:60, id: "level-E6-brick", text: "重蹈覆辙", img: "./assets/gallery/E6_end_brick.png", next: null},
    // {x:50, y:60, id: "level-E6-hermit", text: "拒不配合", img: "./assets/gallery/E6_end_hermit.png", next: null},
    // {x:76, y:60, id: "level-E6-fire", text: "推翻太监", img: "./assets/gallery/E6_end_fire.png", next: null}
];
const buttonWidthRatio = 20;
const buttonHeightRatio = 15;

