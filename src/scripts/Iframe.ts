import {Page} from '../components/Page';

const testBlocks = {
    "blocks": [
        {
            "id": "LFcaVWcjFQ",
            "type": "HEADER",
            "data": {
                "text": "Editor.js",
                "level": 2
            }
        },
        {
            "id": "7IjDhY4tC5",
            "type": "PARAGRAPH",
            "data": {
                "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
            }
        },
        {
            "id": "gyGhfMbW1_",
            "type": "HEADER",
            "data": {
                "text": "Key features",
                "level": 3
            }
        },
        {
            "id": "JCkDTurI1y",
            "type": "LIST",
            "data": {
                "style": "unordered",
                "items": [
                    "It is a block-styled editor",
                    "It returns clean data output in JSON",
                    "Designed to be extendable and pluggable with a simple API"
                ]
            }
        },
        {
            "id": "zNUj5uQsgk",
            "type": "HEADER",
            "data": {
                "text": "What does it mean «block-styled editor»",
                "level": 3
            }
        },
        {
            "id": "-8nBiP2AZQ",
            "type": "PARAGRAPH",
            "data": {
                "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: PARAGRAPHs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
            }
        },
        {
            "id": "YjnYDBliIF",
            "type": "PARAGRAPH",
            "data": {
                "text": "이 연구는 (연구에 대한 간략한 설명) 에 대한 연구입니다. 귀하는 (연구대상자 설정 이유 기술) 이기 때문에 이 연구에 참여하도록 권유 받았습니다. 이 연구를 수행하는 <b>한림대학교성심병원</b> 소속 (연구책임자 혹은 직접 동의서를 받는 연구원명), 연구원(이름, 전화번호 명시)이 귀하에게 <u>이 연구 참여 과정에 대하여 설명해 줄 것입니다.</u> 이 연구는 자발적으로 참여 의사를 밝히신 분에 한하여 수행 될 것이며, 귀하께서는 본 임상 연구에 참여 의사를 결정하기에 앞서, 본 임상연구가 왜 수행되고, 귀하의 정보가 어떻게 사용될지, 본 임상연구가 어떤 것을 포함하고 있는 지와 가능한 이점, 위험, 불편함은 <mark>무엇인지에 대하여 이해하는 것이 중요합니다.</mark> <br/>다음의 설명을 신중하게 시간을 가지고 주의 깊게 읽으시기 바라며, 필요하시면 귀하의 주치의 또는 가족과 상의하시기 바랍니다. 만일 어떠한 질문 사항이 있으시면 담당 연구원이 자세하게 설명해 줄 것입니다. "
            }
        },
        {
            "id": "u_1dNiA5XT",
            "type": "HEADER",
            "data": {
                "text": "What does it mean clean data output",
                "level": 3
            }
        },
        {
            "id": "JQw7TJfQXf",
            "type": "PARAGRAPH",
            "data": {
                "text": "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
            }
        },
        {
            "id": "A3rNQr1t8i",
            "type": "PARAGRAPH",
            "data": {
                "text": "Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
            }
        },
        {
            "id": "728B8KnxSq",
            "type": "PARAGRAPH",
            "data": {
                "text": "Clean data is useful to sanitize, validate and process on the backend."
            }
        },
        {
            "id": "Wu9-16w3JS",
            "type": "DELIMITER",
            "data": {}
        },
        {
            "id": "Vxhxs4yis3",
            "type": "PARAGRAPH",
            "data": {
                "text": "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
            }
        },
        {
            "id": "lFPVflZuLc",
            "type": "IMAGE",
            "data": {
                "file": {
                    "url": "https://codex.so/public/app/img/external/codex2x.png"
                },
                "caption": "",
                "withBorder": false,
                "stretched": false,
                "withBackground": false
            }
        },
        {
            "id": "DWFQkJrzPl",
            "type": "LIST",
            "data": {
                "style": "ordered",
                "items": [
                    "test aaa",
                    "option",
                    "afwef123"
                ]
            }
        },
        {
            "id": "DWFQkJ123123rzPl",
            "type": "CHECKBOX",
            "data": {
                "items": [
                    {
                        "value": "1",
                        "label": "개인정보제공에 동의합니다.",
                        "checked": false
                    },
                    {
                        "value": "2",
                        "label": "제 3자 개인정보제공에 동의합니다.",
                        "checked": true
                    }
                ]
            }
        },
        {
            "id": "TcNQkYIbq0",
            "type": "DELIMITER",
            "data": {}
        },
        {
            "id": "6VtqqQwWgP",
            "type": "PARAGRAPH",
            "data": {
                "text": "<highlight>본 임상시험의 참여 결정은 귀하의 의사에 달려 있습니다.</highlight> 모든 사항은 귀하의 <mark>자유의사에 따라 참여를 결정하거나 포기를 결정할 수 있습니다.</mark> 또한 임상시험 도중에 언제라도 중단을 결정할 수 있으며, 이로 인하여 어떠한 불이익도 받지 않을 것입니다. 임상시험을 중단할 시에는 담당의사와 통상적인 치료방법을 상의하여 결정을 할 것입니다. 저희는 <text content=\"Annotation1\">임상시험 도중 시험약과 관련된 새로운 과학적 자료나 정보</text>, 안전성과 관련된 새로운 사실이 알려지면 여러분에게 즉시 알려드려 임상시험의 계속 참여 여부를 결정할 수 있도록 하겠습니다. 여러분이 임상시험의 계속 참여를 원하셔도 다음과 같은 경우에는 의료진이 임상시험에서 탈락시킬 수 있습니다. (임상시험 참여가 환자에게 해롭거나 임상시험에서 허락하지 않는 다른 치료가 추가로 필요할 경우, 환자가 지시를 따르지 않는 경우, 임신의 경우, 임상시험이 취소되는 경우) 아래의 설명을 읽어 보신 후 임상시험에 참여를 원하시면 자발적으로 <highlight>서명 동의를 하신 분에 한하여</highlight> 임상시험을 진행하게 됩니다. <mark style='background: #fef0f0'>workspace c<b>onsists of separa</b>te Blocks: paragraphs, headings, images, lists, <i>quotes(italic)</i>,<i> etc(italic)</i></mark> 이 연구는 (연구에 대한 간략한 설명) 에 대한 연구입니다. <i>귀하는 대상자 이기 때문에 이 연구에 참여하도록 권유 받았습니다.</i> 이 연구를 수행하는 <b>한림대학교성심병원</b> 소속 (연구책임자 혹은 직접 동의서를 받는 연구원명), 연구원(이름, 전화번호 명시)이 귀하에게 이 연구 참여 과정에 대하여 설명해 줄 것입니다. 이 연구는 자발적으로 <u>참여 의사를 밝히신 분에 한하여 수행</u> 될 것이며, 귀하께서는 본 임상 연구에 참여 의사를 결정하기에 앞서, 본 임상연구가 왜 수행되고, 귀하의 정보가 어떻게 사용될지, 본 임상연구가 어떤 것을 포함하고 있는 지와 가능한 이점, 위험, 불편함은 무엇인지에 대하여 이해하는 것이 중요합니다. 다음의 설명을 신중하게 시간을 가지고 주의 깊게 읽으시기 바라며, 필요하시면 귀하의 주치의 또는 가족과 상의하시기 바랍니다. 만일 어떠한 질문 사항이 있으시면 담당 연구원이 자세하게 설명해 줄 것입니다. <br /> 본 임상시험은 임상적 연구입니다. <mark><b style=\"background: red\">연구목적은 OOO대상으로 OOO의 <i>치료가 <u>안전하고 효과적인지 여부를 판단하고</u> 평가하는</i> 임상시험입니다.</mark> <br/>OOO는 전세계 보건당국의 승인을 아직 받지 않은 의약품입니다. <mark>이 의약품은 OOO치료 약물로서 현재 약품에 </mark>대한 평가가 진행 중입니다. 따라서 임상시험이 진행되는 도중에 예상치 못한 합병증이 발생할 가능성이 있습니다. 본 임상시험의 참여 결정은 귀하의 의사에 달려 있습니다. 모든 사항은 귀하의 자유의사에 따라 참여를 결정하거나 포기를 결정할 수 있습니다.</b> 또한 임상시험 도중에 언제라도 중단을 결정할 수 있으며, 이로 인하여 어떠한 불이익도 받지 않을 것입니다. 임상시험을 중단할 시에는 담당의사와 통상적인 치료방법을 상의하여 결정을 할 것입니다. 저희는 임상시험 도중 시험약과 관련된 새로운 과학적 자료나 정보, 안전성과 관련된 새로운 사실이 알려지면 여러분에게 즉시 알려드려 임상시험의 계속 참여 여부를 결정할 수 있도록 하겠습니다. 여러분이 임상시험의 계속 참여를 원하셔도 다음과 같은 경우에는 의료진이 임상시험에서 탈락시킬 수 있습니다. (임상시험 참여가 환자에게 해롭거나 임상시험에서 허락하지 않는 다른 치료가 추가로 필요할 경우, 환자가 지시를 따르지 않는 경우, 임신의 경우, 임상시험이 취소되는 경우) 아래의 설명을 읽어 보신 후 임상시험에 참여를 원하시면 자발적으로 서명 동의를 하신 분에 한하여 임상시험을 진행하게 됩니다."
            }
        },
        {
            "id": "BC-AGGvElF",
            "type": "PARAGRAPH",
            "data": {
                "text": "awefaw"
            }
        }
    ]
};

export function getIframe () {
    const iframe: HTMLIFrameElement = document.createElement('iframe');
    iframe.id = 'cube-editor';
    const body = document.createElement('body');

    const json = JSON.stringify(testBlocks.blocks);
    const page:Page = new Page(new Date().getTime().toString());
    page.blocks = page.parseJson(json);
    const rootDiv = document.createElement('div');
    page.blocks.forEach(t => {
        rootDiv.appendChild(t.getHtmlElement());
    })
    body.appendChild(rootDiv);

    iframe.src = `data:text/html;charset=utf-8,${encodeURI(body.outerHTML ?? '')}`;
    iframe.height = '500px';
    iframe.width = '500px';
    
    return iframe;
}

export function initEventHandler() {
    const iframe: HTMLIFrameElement | null = document.getElementById('cube-editor') as HTMLIFrameElement;
    console.log(iframe);
    if (iframe != null) {
        parent.postMessage('긴 밤이 되니까 널 데려가니까', '*');
        
        // const paragraphs = iframe.contentWindow?.document.querySelectorAll('div#cube-paragraph > p');
        // console.log(paragraphs);
    }
}
