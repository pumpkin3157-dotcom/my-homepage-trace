// ===== 全局变量 =====
const navLinks = document.querySelectorAll('.nav-link');
const sectionCards = document.querySelectorAll('.section-card');
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineProgress = document.getElementById('timelineProgress');
const timelineWalker = document.getElementById('timelineWalker');
const bookOnShelves = document.querySelectorAll('.book-on-shelf');
const bookCircle = document.getElementById('bookCircle');
const bookPreview = document.getElementById('bookPreview');
const bookPreviewOverlay = document.getElementById('bookPreviewOverlay');
const bookPreviewContent = document.getElementById('bookPreviewContent');
const previewCoverImg = document.getElementById('previewCoverImg');
const book3d = document.getElementById('book3d');
const previewHint = document.getElementById('previewHint');

// 毛线球滚动连线
const yarnBall = document.getElementById('yarnBall');
const yarnDrawPath = document.getElementById('yarnDrawPath');
const yarnBgPath = document.getElementById('yarnBgPath');
const yarnConnector = document.getElementById('yarnConnector');
let yarnPathLength = 0;

// 书籍数据
const bookData = [
    { title: '活着', author: '余华', desc: '讲述了在大时代背景下，随着内战、三反五反、大跃进、文化大革命等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。', quote: '人是为了活着本身而活着的，而不是为了活着之外的任何事物所活着。', feeling: '这本书是严格意义上我自由选择的第一本小说。我要感谢我的一位朋友，在我14岁生日时送与我，让我认识了余华，开启了我的阅读之旅。一句话描述：除了富贵其余人都没活着。' },
    { title: '撒哈拉的故事', author: '三毛', desc: '三毛以乐观、执着的艰苦劳作，用热爱生活的心，将沙漠中艰苦的生活化为一个个动人的故事，展现了她与荷西在撒哈拉沙漠的浪漫生活。', quote: '生命的过程，无论是阳春白雪，青菜豆腐，我都得尝尝是什么滋味，才不枉来走这么一遭。', feeling: '这本书断断续续陪伴了我很久。2025年寒假，一个阳光温暖的午后，我坐在勤耕雨读室外的躺椅上，周围是盛放着的火红郁金香，读到三毛考驾照那一段，回想起了自己三把才过的科二。' },
    { title: '我的阿勒泰', author: '李娟', desc: '记录了作者在新疆北部阿勒泰地区生活的点点滴滴，包括与母亲的相处、与哈萨克族牧民的交往，以及对自然和生活的感悟。', quote: '我渐渐明白，世间最可厌恶的事莫如一张生气的脸；世间最下流的事莫如把生气的脸摆给旁人看。', feeling: '书只看过十几页，电视剧看完了。2025年暑假，弟弟小学毕业只身一人来到武汉，旅行的某一天我带他来到一家整墙落地窗的书店，我翻开了这本书，瘫坐在沙发上，抬头就能看到鹦鹉洲大桥。' },
    { title: '天堂旅行团', author: '张嘉佳', desc: '一个绝望的人，一个奇怪的女孩，一场说走就走的旅行。在旅途中，他们彼此治愈，找到了生活的意义。', quote: '总有一个人，陪你走过一段路，然后消失在人海。', feeling: '这本书是高二的一次考试期间看完的。考试前的自习时间就是我自由阅读的休闲时刻，结果那次考试倒是考得格外好。后来我发现，每次考试前看小说，好像都能超常发挥。' },
    { title: '从你的全世界路过', author: '张嘉佳', desc: '33个温暖又心酸的故事，关于爱情、友情和成长。每个人都能在其中找到自己的影子。', quote: '我希望有个如你一般的人，如山间清爽的风，如古城温暖的光。', feeling: '这本书陪我走过了高二、高三，我也不断二刷、三刷，每一次翻开都为之感动。我有个爱好就是逛书店，彼时我并不知悉这位作者，只是它的封面和书名完全迷住了我，我买下它，因为它喜欢上了这个作者，爱上了写随笔。' },
    { title: '云边有个小卖部', author: '张嘉佳', desc: '讲述了云边镇少年刘十三的成长故事，关于亲情、友情和爱情的温暖叙事，让人笑中带泪。', quote: '为别人活着，也要为自己活着。希望和悲伤，都是一缕光。', feeling: '这本书是我初中的时候，那位被提及多次的中学最好的朋友借给我看的，这是我第一次看张嘉佳的书。一个蝉鸣的夏日，在下午阳光正浓烈的时候，我看完了整本书，一个人在客厅失声痛哭。' },
    { title: '兄弟', author: '余华', desc: '讲述了江南小镇两兄弟李光头和宋钢从文革到改革开放的人生经历，展现了时代变迁中人性的复杂与光辉。', quote: '这就是我们刘镇，这就是我们的人生。', feeling: '这本书我清楚地记得是准高三暑假补习好几节自习课看完的。书很厚，但是看得特别快，我把它称为余华小说的特点：酣畅、利落、上头。' },
    { title: '十八岁出门远行', author: '余华', desc: '余华早期短篇小说集，以独特的叙事风格展现了青春期的迷茫、冲动与成长。', quote: '我还没有走进那家旅店，在我的印象里，旅店应该在一个小镇上。', feeling: '爸爸在2025年国庆节送给我的礼物。那天傍晚我和弟弟以及我老爸，我们三个人一起骑车路过子雲书院。在我的影响下大家都找了本书阅读起来，临走时，我恋恋不舍，老爸便说现在就给你买，就当爸爸国庆节送给你的礼物。' },
    { title: '我们生活在巨大的差距里', author: '余华', desc: '余华的散文集，记录了他对文学、生活、社会的思考与感悟，文字真诚而深刻。', quote: '文学不是用来解释生活的，而是用来感受生活的。', feeling: '这本书现在还放在我的书架上，读过其中几个故事，只记得余华在一家店与老板攀谈时，发现马尔克斯来过此地。有一次我把书带回老家了，阿婆在一个下雨天把书送回来，书封被雨水浸润，不再完整，但是唯一。' },
    { title: '月亮与六便士', author: '毛姆', desc: '一个证券经纪人突然抛弃一切去追求绘画梦想的故事，探讨了理想与现实的永恒命题。', quote: '满地都是六便士，他却抬头看见了月亮。', feeling: '很早以前就知道这本书了，书名一直很吸引我，但是也被朋友拔草过。当自己看完之后，最大的印象就是，斯特里克兰很自私，从头到尾，无法共情他的理想和执着。' },
    { title: '牛虻', author: '伏尼契', desc: '讲述了意大利青年亚瑟在革命斗争中成长的故事，展现了信仰、爱情与牺牲的主题。', quote: '不管我活着，还是我死去，我都是一只牛虻，快乐地飞来飞去。', feeling: '我中学最好的朋友强烈安利我品读。只记得它跟着我去到大学的各个课堂，在线性代数的5分钟课间，我也如饥似渴地翻阅着。最后因为牛虻的死亡，在寝室泪如雨下。' },
    { title: '生死疲劳', author: '莫言', desc: '地主西门闹被冤杀后，经历了驴、牛、猪、狗、猴五次转世，以动物的视角见证了半个世纪的中国农村变迁。', quote: '生死疲劳，从贪欲起。少欲无为，身心自在。', feeling: '高三的时候，身边同学都在看这本书，好评如潮。我也忘记什么时候买的这本书了，看了三分之一，因为各种原因没有继续看下去，后面会慢慢继续看完，因为故事一直在那里等我。' },
    { title: '第七天', author: '余华', desc: '主人公杨飞死后七天的所见所闻，以死者的视角审视现实社会的种种荒诞与温情。', quote: '我的悲伤还来不及出发，就已经到站下车了。', feeling: '当时书荒了，同样是找到我那位中学最好的朋友推荐。这是我看的余华的第三本书，我爱看这样节奏明快、情节紧凑的小说，于是我喜欢上了余华，他的大部分小说我都一一拜读。' },
    { title: '霍乱时期的爱情', author: '马尔克斯', desc: '跨越半个多世纪的爱情故事，讲述了弗洛伦蒂诺对费尔米纳长达五十一年九个月零四天的等待与追求。', quote: '爱情始终是爱情，只不过距离死亡越近，爱就越浓郁。', feeling: '正在阅读中，也是断断续续读了很久，但是因为马尔克斯熟悉的笔触，我从未感到过陌生。记忆最深的是复读那年，妍姐沉迷其中，问到就说"超级好看！"' },
    { title: '皮囊', author: '蔡崇达', desc: '一部有着小说阅读质感的散文集，作者以客观、细腻的笔触描写了家乡福建泉州东石镇的生活，探讨了亲情、友情和人生的意义。', quote: '我们的生命本来多轻盈，都是被这肉体和各种欲望的污浊给拖住。', feeling: '我清楚地记得复读短暂的军训期间，一位老师为我们推荐了很多读物，我就记住了它。起初把它误判为议论文，便一直没走进它的世界，后来它却陪我走过了我的复读征程。再后来我也亲自去到了"母亲的房子"，在那里再一次翻开它，感受作者笔尖的心跳。' },
    { title: '百年孤独', author: '马尔克斯', desc: '魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰。', quote: '过去都是假的，回忆是一条没有归途的路，以往的一切春天都无法复原。', feeling: '这本书在我的阅读旅程里倒是有些传奇色彩。刚开始看，是在第一年高三备考的后半期。我清楚地记得乐山市三调的期间我一直依赖着它。后来高考完，我做完近视手术，为了少看电子屏幕，便重新拾起了它。故事带给我的震撼也让我坚定地选择复读。' }
];

// 轮播状态
let carouselIndex = 0;
let carouselTimer = null;

// 书籍圆圈旋转
let bookRotation = 0;
let bookScrollSpeed = 0;

// Study时间轴状态
let timelineAutoStarted = false;
let timelineAutoProgress = 0;
let timelineAutoAnimFrame = null;

// 气泡文本数据：节点和线段
const bubbleTexts = [
    { zone: 'node', index: -1, text: '准备好了吗？ready…' },          // 原点
    { zone: 'node', index: 0, text: '无忧无虑的童年' },                // 五一小学
    { zone: 'segment', from: 0, to: 1, text: '要去县里上学了，加油！' },
    { zone: 'node', index: 1, text: '学会了生活独立，很棒！' },          // 犍为外国语实验学校
    { zone: 'segment', from: 1, to: 2, text: '马上要上高中啦～' },
    { zone: 'node', index: 2, text: '特别辛苦的三年…' },                // 犍为一中
    { zone: 'segment', from: 2, to: 3, text: '高三打基础高四985，加油！' },
    { zone: 'node', index: 3, text: '特别充实、幸福的一年～' },          // 绵阳中学实验学校
    { zone: 'segment', from: 3, to: 4, text: '211当然也很满足啦～谢谢你！' },
    { zone: 'node', index: 4, text: '在读中…' },                       // 中南财经政法大学
    { zone: 'node', index: 5, text: '未来由现在的你决定，加油！' },      // 之后
];

// 根据进度获取气泡文本（学校出现后才显示节点文本）
function getBubbleText(progress) {
    // 5个学校的出现阈值
    const schoolThresholds = [0.1, 0.3, 0.5, 0.7, 0.9];
    const nodeThreshold = 0.035;

    // 检查是否在某个学校节点附近
    for (let i = 0; i < schoolThresholds.length; i++) {
        if (Math.abs(progress - schoolThresholds[i]) < nodeThreshold) {
            // 学校已出现才显示节点文本，否则显示前一段线段文本
            if (progress >= schoolThresholds[i]) {
                return bubbleTexts.find(b => b.zone === 'node' && b.index === i)?.text || '';
            } else {
                // 还没到学校，显示上一段线段文本
                if (i > 0) {
                    return bubbleTexts.find(b => b.zone === 'segment' && b.from === i - 1)?.text || '';
                }
                return bubbleTexts[0].text; // 原点
            }
        }
    }

    // 检查是否在某个线段区间
    for (let i = 0; i < schoolThresholds.length - 1; i++) {
        if (progress > schoolThresholds[i] && progress < schoolThresholds[i + 1]) {
            return bubbleTexts.find(b => b.zone === 'segment' && b.from === i)?.text || '';
        }
    }

    // 起点之前
    if (progress < 0.02) {
        return bubbleTexts[0].text;
    }
    // 最后一个学校之后
    if (progress > 0.98) {
        return bubbleTexts[bubbleTexts.length - 1].text;
    }

    return '';
}

document.addEventListener('DOMContentLoaded', () => {
    setupIntroAnimation();
    setupNavigation();
    setupSectionCards();
    setupYarnConnector();
    setupTimelineAutoWalk();
    setupCarousel();
    setupBookCircle();
    setupBookPreview();
    setupProvinceInteraction();
    setupTarotCards();
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

// ===== 开场动画 =====
function setupIntroAnimation() {
    const overlay = document.getElementById('introOverlay');
    const introBall = document.getElementById('introBall');
    const letters = document.querySelectorAll('.intro-letter');
    const letsGoBtn = document.getElementById('letsGoBtn');
    const yarnBall = document.getElementById('yarnBall');
    if (!overlay || !introBall || !letsGoBtn) return;

    const sceneWidth = 380;
    const ballStartX = 0;
    const ballEndX = 380;
    const rollDuration = 3000;
    const letterCount = letters.length;
    const letterSpacing = (ballEndX - ballStartX) / (letterCount + 1);

    let animStartTime = null;
    let animFrameId = null;
    let lastVisibleCount = 0;

    function easeInOut(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animateIntro(timestamp) {
        if (!animStartTime) animStartTime = timestamp;
        const elapsed = timestamp - animStartTime;
        const cycleDuration = rollDuration * 2;
        const cycleTime = elapsed % cycleDuration;

        let progress;
        if (cycleTime < rollDuration) {
            progress = cycleTime / rollDuration;
        } else {
            progress = 1 - (cycleTime - rollDuration) / rollDuration;
        }

        const easedProgress = easeInOut(progress);
        const ballX = ballStartX + (ballEndX - ballStartX) * easedProgress;
        introBall.style.left = ballX + 'px';

        const visibleCount = Math.floor(progress * (letterCount + 0.5));
        const clampedCount = Math.min(Math.max(visibleCount, 0), letterCount);

        if (clampedCount !== lastVisibleCount) {
            for (let i = 0; i < letterCount; i++) {
                if (i < clampedCount) {
                    letters[i].classList.add('visible');
                } else {
                    letters[i].classList.remove('visible');
                }
            }
            lastVisibleCount = clampedCount;
        }

        animFrameId = requestAnimationFrame(animateIntro);
    }

    animFrameId = requestAnimationFrame(animateIntro);

    letsGoBtn.addEventListener('click', () => {
        cancelAnimationFrame(animFrameId);

        overlay.classList.add('shrink');

        const ballRect = introBall.getBoundingClientRect();
        const homeSection = document.getElementById('home');
        const targetY = homeSection ? homeSection.offsetTop + 100 : 200;
        const targetX = window.innerWidth / 2 - 18;

        setTimeout(() => {
            overlay.style.display = 'none';
            yarnBall.style.display = '';
            yarnBall.style.opacity = '0';

            const startY = ballRect.top;
            const startX = ballRect.left;
            const dropDuration = 600;
            const bounceDuration = 800;
            const startTime = performance.now();

            function animateDrop(timestamp) {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / dropDuration, 1);
                const eased = progress * progress;

                const currentY = startY + (targetY - startY) * eased;
                yarnBall.style.top = currentY + 'px';
                yarnBall.style.left = startX + 'px';
                yarnBall.style.opacity = String(Math.min(progress * 2, 1));

                if (progress < 1) {
                    requestAnimationFrame(animateDrop);
                } else {
                    const bounceStartTime = performance.now();
                    function animateBounce(timestamp) {
                        const elapsed = timestamp - bounceStartTime;
                        const progress = Math.min(elapsed / bounceDuration, 1);
                        const eased = 1 - Math.pow(1 - progress, 2);

                        const currentY = targetY - (targetY - 60) * eased;
                        const currentX = startX + (targetX - startX) * eased;
                        yarnBall.style.top = currentY + 'px';
                        yarnBall.style.left = currentX + 'px';

                        if (progress < 1) {
                            requestAnimationFrame(animateBounce);
                        } else {
                            handleScroll();
                        }
                    }
                    requestAnimationFrame(animateBounce);
                }
            }

            requestAnimationFrame(animateDrop);
        }, 600);
    });
}

// ===== 导航 =====
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== 封面卡片点击跳转 =====
function setupSectionCards() {
    sectionCards.forEach(card => {
        card.addEventListener('click', () => {
            const sectionId = card.getAttribute('data-section');
            const target = document.getElementById(sectionId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== 毛线球滚动连线 =====
function setupYarnConnector() {
    if (!yarnDrawPath) return;
    
    // 获取路径总长度
    yarnPathLength = yarnDrawPath.getTotalLength();
    yarnDrawPath.style.strokeDasharray = yarnPathLength;
    yarnDrawPath.style.strokeDashoffset = yarnPathLength;
    
    // 初始隐藏毛线球
    if (yarnBall) {
        yarnBall.style.opacity = '0';
    }
}

function updateYarnConnector() {
    if (!yarnDrawPath || !yarnBall || yarnPathLength === 0) return;
    
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // 计算滚动进度 (0~1)
    const scrollProgress = scrollY / (documentHeight - windowHeight);
    
    // 更新路径绘制
    const drawOffset = yarnPathLength * (1 - scrollProgress);
    yarnDrawPath.style.strokeDashoffset = drawOffset;
    
    // 获取当前路径点位置
    const point = yarnDrawPath.getPointAtLength(yarnPathLength * scrollProgress);
    
    // 更新毛线球位置
    const svgRect = yarnConnector.getBoundingClientRect();
    const scaleX = svgRect.width / 200;
    const scaleY = svgRect.height / 3200;
    
    const ballX = svgRect.left + point.x * scaleX;
    const ballY = svgRect.top + point.y * scaleY;
    
    yarnBall.style.left = (ballX - 18) + 'px';
    yarnBall.style.top = (ballY - 18) + 'px';
    yarnBall.style.opacity = '1';
}

// ===== Study 横向时间轴 - 滚动自动行走 + 拖拽 =====

function setupTimelineAutoWalk() {
    const timelineContainer = document.getElementById('timelineHorizontal');
    if (!timelineContainer) return;

    // 初始隐藏所有时间轴项
    timelineItems.forEach(item => {
        item.classList.remove('visible');
        item.classList.remove('active');
    });

    // 点击跳转到对应网页
    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // 启用拖拽功能
    setupTimelineDrag();
}

function setupTimelineDrag() {
    if (!timelineWalker) return;
    
    let isDragging = false;
    let dragStartX = 0;
    let dragStartProgress = 0;
    
    const trackElement = document.querySelector('.timeline-track');
    if (!trackElement) return;
    
    const bubble = document.getElementById('walkerBubble');
    
    // 更新气泡显示
    function updateBubble() {
        if (!bubble) return;
        const text = getBubbleText(timelineAutoProgress);
        if (text) {
            bubble.textContent = text;
            bubble.classList.add('show');
        } else {
            bubble.classList.remove('show');
        }
    }
    
    // 隐藏气泡
    function hideBubble() {
        if (bubble) bubble.classList.remove('show');
    }
    
    // 鼠标按下开始拖拽 - 全程可用
    timelineWalker.addEventListener('mousedown', (e) => {
        // 取消正在进行的自动行走动画
        if (timelineAutoAnimFrame) {
            cancelAnimationFrame(timelineAutoAnimFrame);
            timelineAutoAnimFrame = null;
        }
        isDragging = true;
        dragStartX = e.clientX;
        dragStartProgress = timelineAutoProgress;
        timelineWalker.style.cursor = 'grabbing';
        updateBubble();
        e.preventDefault();
    });
    
    // 鼠标移动时更新位置
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - dragStartX;
        const trackWidth = trackElement.offsetWidth - 120;
        const progressDelta = deltaX / trackWidth;
        
        timelineAutoProgress = Math.max(0, Math.min(1, dragStartProgress + progressDelta));
        updateTimelineDisplay();
        updateBubble();
    });
    
    // 鼠标松开结束拖拽
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            timelineWalker.style.cursor = 'grab';
            hideBubble();
        }
    });
    
    // 触摸支持 - 全程可用
    timelineWalker.addEventListener('touchstart', (e) => {
        // 取消正在进行的自动行走动画
        if (timelineAutoAnimFrame) {
            cancelAnimationFrame(timelineAutoAnimFrame);
            timelineAutoAnimFrame = null;
        }
        isDragging = true;
        dragStartX = e.touches[0].clientX;
        dragStartProgress = timelineAutoProgress;
        updateBubble();
        e.preventDefault();
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.touches[0].clientX - dragStartX;
        const trackWidth = trackElement.offsetWidth - 120;
        const progressDelta = deltaX / trackWidth;
        
        timelineAutoProgress = Math.max(0, Math.min(1, dragStartProgress + progressDelta));
        updateTimelineDisplay();
        updateBubble();
    });
    
    document.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
            hideBubble();
        }
    });

    // 鼠标悬停小人时显示气泡
    timelineWalker.addEventListener('mouseenter', () => {
        updateBubble();
    });
    timelineWalker.addEventListener('mouseleave', () => {
        if (!isDragging) hideBubble();
    });
}

function updateTimelineAutoWalk() {
    const timelineContainer = document.getElementById('timelineHorizontal');
    if (!timelineContainer) return;

    const studySection = document.getElementById('study');
    if (!studySection) return;

    const rect = studySection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 当Study板块进入视口时，开始自动行走
    if (rect.top < windowHeight * 0.7 && !timelineAutoStarted) {
        timelineAutoStarted = true;
        timelineAutoProgress = 0;
        animateTimelineWalk();
    }
}

function animateTimelineWalk() {
    if (timelineAutoProgress >= 1) {
        // 走完后保持最终状态
        timelineAutoProgress = 1;
        updateTimelineDisplay();
        return;
    }

    timelineAutoProgress += 0.004; // 控制行走速度
    updateTimelineDisplay();
    timelineAutoAnimFrame = requestAnimationFrame(animateTimelineWalk);
}

function updateTimelineDisplay() {
    const timelineContainer = document.getElementById('timelineHorizontal');
    if (!timelineContainer) return;

    const trackElement = document.querySelector('.timeline-track');
    if (!trackElement) return;

    const trackWidth = trackElement.offsetWidth - 120;

    // 更新进度条
    if (timelineProgress) {
        timelineProgress.style.width = (trackWidth * timelineAutoProgress) + 'px';
    }

    // 更新小人位置
    if (timelineWalker) {
        const walkerX = 60 + (trackWidth * timelineAutoProgress);
        timelineWalker.style.left = walkerX + 'px';
    }

    // 渐显每个时间轴项
    timelineItems.forEach((item, index) => {
        const itemProgress = (index + 0.5) / timelineItems.length;
        if (timelineAutoProgress >= itemProgress) {
            item.classList.add('visible');
            item.classList.add('active');
        } else {
            item.classList.remove('visible');
            item.classList.remove('active');
        }
    });
}

// ===== Photo 照片数据 =====
const photoData = [
    { file: '2025年5月29日-广阜屯公交站.jpg', date: '2025年5月29日', location: '广阜屯公交站', province: '辽宁省' },
    { file: '2025年5月30日-长江大桥.jpg', date: '2025年5月30日', location: '长江大桥', province: '湖北省' },
    { file: '2025年6月30日-张渔哥的海鲜面.jpg', date: '2025年6月30日', location: '张渔哥的海鲜面', province: '浙江省' },
    { file: '2025年7月7日-沐川.jpg', date: '2025年7月7日', location: '沐川', province: '四川省' },
    { file: '2025年8月23日-坛南湾海滩.jpg', date: '2025年8月23日', location: '坛南湾海滩', province: '福建省' },
    { file: '2025年11月13日-武汉植物院.jpg', date: '2025年11月13日', location: '武汉植物园', province: '湖北省' },
    { file: '2026年1月22日-瓦屋山.jpg', date: '2026年1月22日', location: '瓦屋山', province: '四川省' },
    { file: '2026年1月31日-李庄.jpg', date: '2026年1月31日', location: '李庄', province: '四川省' },
    { file: '2026年2月20日-海螺沟.jpg', date: '2026年2月20日', location: '海螺沟', province: '四川省' },
    { file: '2026年3月11日-文波楼.jpg', date: '2026年3月11日', location: '文波楼', province: '湖北省' },
    { file: '2026年3月28日-总统府.jpg', date: '2026年3月28日', location: '总统府', province: '江苏省' },
    { file: '2026年3月28日-鸡鸣寺.jpg', date: '2026年3月28日', location: '鸡鸣寺', province: '江苏省' },
    { file: '2026年3月29日-红山动物园.jpg', date: '2026年3月29日', location: '红山动物园', province: '江苏省' },
    { file: '2026年4月4日-尤加利咖啡店.jpg', date: '2026年4月4日', location: '尤加利咖啡店', province: '江苏省' },
    { file: '2026年4月12日-南湖会堂.jpg', date: '2026年4月12日', location: '南湖会堂', province: '湖北省' },
    { file: '2026年4月26日-九孔桥.jpg', date: '2026年4月26日', location: '九孔桥', province: '江苏省' },
    { file: '2026年5月30日-千岛湖.jpg', date: '2026年5月30日', location: '千岛湖', province: '浙江省' }
];

// ===== Photo 叠放轮播 =====
function setupCarousel() {
    const stack = document.getElementById('carouselStack');
    
    // 动态生成照片元素
    photoData.forEach((photo, index) => {
        const photoEl = document.createElement('div');
        photoEl.className = 'carousel-photo';
        photoEl.dataset.index = index;
        photoEl.innerHTML = `
            <div class="photo-placeholder">
                <img src="./images/${photo.file}" alt="${photo.location}">
            </div>
        `;
        stack.appendChild(photoEl);
    });
    
    carouselPhotos = document.querySelectorAll('.carousel-photo');
    
    // 点击照片翻转
    carouselPhotos.forEach(photo => {
        photo.addEventListener('click', () => {
            const index = parseInt(photo.dataset.index);
            showPhotoFlip(index);
        });
    });
    
    updateCarouselPositions();
    startCarouselAutoPlay();
    
    document.querySelector('.prev-btn').addEventListener('click', () => {
        carouselIndex = (carouselIndex - 1 + carouselPhotos.length) % carouselPhotos.length;
        updateCarouselPositions();
        resetCarouselAutoPlay();
    });
    
    document.querySelector('.next-btn').addEventListener('click', () => {
        carouselIndex = (carouselIndex + 1) % carouselPhotos.length;
        updateCarouselPositions();
        resetCarouselAutoPlay();
    });
}

function updateCarouselPositions() {
    const total = carouselPhotos.length;
    carouselPhotos.forEach((photo, i) => {
        // 计算相对位置：-2, -1, 0, 1, 2
        let diff = (i - carouselIndex + total) % total;
        if (diff > total / 2) diff -= total; // 转为负数范围
        // 限制在 -2 到 2 之间
        let pos;
        if (diff >= -2 && diff <= 2) {
            pos = diff;
        } else {
            pos = diff > 0 ? 3 : -3; // 超出范围的归到隐藏位置
        }
        photo.setAttribute('data-pos', pos);
    });
}

function startCarouselAutoPlay() {
    carouselTimer = setInterval(() => {
        carouselIndex = (carouselIndex + 1) % carouselPhotos.length;
        updateCarouselPositions();
    }, 2000);
}

function resetCarouselAutoPlay() {
    clearInterval(carouselTimer);
    startCarouselAutoPlay();
}

// ===== 照片翻转弹窗 =====
const photoFlipOverlay = document.getElementById('photoFlipOverlay');
const photoFlipCard = document.getElementById('photoFlipCard');
const flipImg = document.getElementById('flipImg');
const flipDate = document.getElementById('flipDate');
const flipLocation = document.getElementById('flipLocation');

// 卡片背面装饰图案（水彩风格SVG）
const cardDecorations = [
    // 0: 广阜屯公交站 - 小巴士和树木
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <rect x="40" y="100" width="120" height="50" rx="10" fill="#8a7560" opacity="0.3"/>
        <circle cx="65" cy="155" r="12" fill="#6b8e6b" opacity="0.35"/>
        <circle cx="135" cy="155" r="12" fill="#6b8e6b" opacity="0.35"/>
        <rect x="55" y="110" width="20" height="20" rx="3" fill="#e8e0d5" opacity="0.5"/>
        <rect x="85" y="110" width="20" height="20" rx="3" fill="#e8e0d5" opacity="0.5"/>
        <rect x="115" y="110" width="20" height="20" rx="3" fill="#e8e0d5" opacity="0.5"/>
        <line x1="30" y1="100" x2="30" y2="60" stroke="#6b8e6b" stroke-width="4" opacity="0.3"/>
        <circle cx="30" cy="50" r="20" fill="#6b8e6b" opacity="0.2"/>
        <line x1="170" y1="100" x2="170" y2="55" stroke="#6b8e6b" stroke-width="4" opacity="0.3"/>
        <circle cx="170" cy="45" r="22" fill="#6b8e6b" opacity="0.2"/>
    </svg>`,
    // 1: 长江大桥 - 大桥和江水
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <path d="M20,120 Q60,80 100,120 Q140,80 180,120" stroke="#8a7560" stroke-width="4" fill="none" opacity="0.4"/>
        <line x1="60" y1="120" x2="60" y2="160" stroke="#8a7560" stroke-width="3" opacity="0.3"/>
        <line x1="100" y1="120" x2="100" y2="160" stroke="#8a7560" stroke-width="3" opacity="0.3"/>
        <line x1="140" y1="120" x2="140" y2="160" stroke="#8a7560" stroke-width="3" opacity="0.3"/>
        <path d="M10,160 Q50,150 100,160 T190,160" stroke="#6b8e6b" stroke-width="2" fill="none" opacity="0.3"/>
        <path d="M10,170 Q50,162 100,170 T190,170" stroke="#6b8e6b" stroke-width="1.5" fill="none" opacity="0.2"/>
        <circle cx="160" cy="50" r="18" fill="#8a7560" opacity="0.15"/>
    </svg>`,
    // 2: 张渔哥的海鲜面 - 小鱼和碗
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <ellipse cx="100" cy="130" rx="50" ry="20" fill="#8a7560" opacity="0.25"/>
        <path d="M50,130 Q100,100 150,130" stroke="#8a7560" stroke-width="3" fill="none" opacity="0.3"/>
        <ellipse cx="80" cy="80" rx="25" ry="15" fill="#6b8e6b" opacity="0.3"/>
        <path d="M105,80 L120,65 L120,95 Z" fill="#6b8e6b" opacity="0.35"/>
        <circle cx="72" cy="77" r="3" fill="#5a4e3f" opacity="0.4"/>
        <path d="M130,60 Q140,50 150,60 Q140,70 130,60" fill="#6b8e6b" opacity="0.2"/>
        <path d="M60,160 Q80,155 100,160 T140,160" stroke="#6b8e6b" stroke-width="1.5" fill="none" opacity="0.25"/>
    </svg>`,
    // 3: 沐川 - 竹林和熊猫
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <line x1="50" y1="30" x2="50" y2="170" stroke="#6b8e6b" stroke-width="5" opacity="0.35"/>
        <line x1="80" y1="20" x2="80" y2="180" stroke="#6b8e6b" stroke-width="4" opacity="0.3"/>
        <line x1="110" y1="35" x2="110" y2="165" stroke="#6b8e6b" stroke-width="3.5" opacity="0.25"/>
        <line x1="140" y1="25" x2="140" y2="175" stroke="#6b8e6b" stroke-width="4" opacity="0.3"/>
        <ellipse cx="50" cy="60" rx="12" ry="5" fill="#6b8e6b" opacity="0.2" transform="rotate(-20,50,60)"/>
        <ellipse cx="80" cy="50" rx="10" ry="4" fill="#6b8e6b" opacity="0.2" transform="rotate(15,80,50)"/>
        <ellipse cx="110" cy="70" rx="11" ry="4.5" fill="#6b8e6b" opacity="0.2" transform="rotate(-10,110,70)"/>
        <circle cx="150" cy="120" r="22" fill="#5a4e3f" opacity="0.25"/>
        <circle cx="142" cy="114" r="5" fill="#e8e0d5" opacity="0.5"/>
        <circle cx="158" cy="114" r="5" fill="#e8e0d5" opacity="0.5"/>
        <circle cx="150" cy="128" r="4" fill="#5a4e3f" opacity="0.3"/>
    </svg>`,
    // 4: 坛南湾海滩 - 海浪和太阳
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <circle cx="160" cy="45" r="25" fill="#8a7560" opacity="0.2"/>
        <path d="M10,120 Q40,100 70,120 T130,120 T190,120" stroke="#6b8e6b" stroke-width="3" fill="none" opacity="0.35"/>
        <path d="M10,135 Q40,118 70,135 T130,135 T190,135" stroke="#6b8e6b" stroke-width="2.5" fill="none" opacity="0.28"/>
        <path d="M10,150 Q40,136 70,150 T130,150 T190,150" stroke="#6b8e6b" stroke-width="2" fill="none" opacity="0.2"/>
        <path d="M60,100 Q65,90 70,100" stroke="#6b8e6b" stroke-width="1.5" fill="none" opacity="0.3"/>
        <path d="M120,105 Q125,95 130,105" stroke="#6b8e6b" stroke-width="1.5" fill="none" opacity="0.3"/>
        <circle cx="40" cy="80" r="3" fill="#6b8e6b" opacity="0.2"/>
        <circle cx="100" cy="75" r="2.5" fill="#6b8e6b" opacity="0.2"/>
    </svg>`,
    // 5: 武汉植物园 - 花朵和蝴蝶
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <circle cx="80" cy="80" r="12" fill="#6b8e6b" opacity="0.3"/>
        <circle cx="65" cy="70" r="9" fill="#6b8e6b" opacity="0.25"/>
        <circle cx="95" cy="70" r="9" fill="#6b8e6b" opacity="0.25"/>
        <circle cx="65" cy="90" r="9" fill="#6b8e6b" opacity="0.25"/>
        <circle cx="95" cy="90" r="9" fill="#6b8e6b" opacity="0.25"/>
        <line x1="80" y1="92" x2="80" y2="150" stroke="#6b8e6b" stroke-width="3" opacity="0.35"/>
        <ellipse cx="60" cy="130" rx="15" ry="8" fill="#6b8e6b" opacity="0.15" transform="rotate(-30,60,130)"/>
        <ellipse cx="100" cy="120" rx="12" ry="6" fill="#6b8e6b" opacity="0.15" transform="rotate(25,100,120)"/>
        <path d="M130,60 Q140,50 150,55 Q155,65 145,70 Q135,75 130,60" fill="#8a7560" opacity="0.25"/>
        <path d="M140,55 Q150,45 160,50 Q165,60 155,65 Q145,70 140,55" fill="#8a7560" opacity="0.2"/>
        <line x1="145" y1="62" x2="170" y2="55" stroke="#8a7560" stroke-width="1" opacity="0.3"/>
    </svg>`,
    // 6: 瓦屋山 - 雪山和云雾
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <path d="M30,150 L70,50 L110,90 L150,40 L170,150 Z" fill="#8a7560" opacity="0.2"/>
        <path d="M70,50 L78,62 L62,62 Z" fill="#e8e0d5" opacity="0.6"/>
        <path d="M150,40 L158,52 L142,52 Z" fill="#e8e0d5" opacity="0.6"/>
        <path d="M20,130 Q60,120 100,130 T180,130" stroke="#8a7560" stroke-width="2" fill="none" opacity="0.2"/>
        <path d="M10,140 Q50,132 100,140 T190,140" stroke="#8a7560" stroke-width="1.5" fill="none" opacity="0.15"/>
        <circle cx="160" cy="35" r="15" fill="#8a7560" opacity="0.12"/>
    </svg>`,
    // 7: 李庄 - 古镇建筑
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <rect x="50" y="100" width="40" height="60" fill="#8a7560" opacity="0.25"/>
        <path d="M42,100 L70,75 L98,100 Z" fill="#8a7560" opacity="0.3"/>
        <rect x="110" y="90" width="45" height="70" fill="#8a7560" opacity="0.2"/>
        <path d="M102,90 L132,65 L162,90 Z" fill="#8a7560" opacity="0.25"/>
        <rect x="62" y="120" width="14" height="20" fill="#6b8e6b" opacity="0.3"/>
        <rect x="122" y="110" width="12" height="18" fill="#6b8e6b" opacity="0.25"/>
        <rect x="140" y="110" width="12" height="18" fill="#6b8e6b" opacity="0.25"/>
        <path d="M30,160 L170,160" stroke="#8a7560" stroke-width="2" opacity="0.2"/>
    </svg>`,
    // 8: 海螺沟 - 雪山和松树
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <path d="M20,160 L60,40 L100,80 L140,30 L180,160 Z" fill="#8a7560" opacity="0.2"/>
        <path d="M60,40 L68,52 L52,52 Z" fill="#e8e0d5" opacity="0.6"/>
        <path d="M140,30 L148,42 L132,42 Z" fill="#e8e0d5" opacity="0.6"/>
        <polygon points="35,160 45,120 55,160" fill="#6b8e6b" opacity="0.25"/>
        <polygon points="40,140 45,110 50,140" fill="#6b8e6b" opacity="0.2"/>
        <polygon points="155,160 165,115 175,160" fill="#6b8e6b" opacity="0.25"/>
        <polygon points="160,135 165,105 170,135" fill="#6b8e6b" opacity="0.2"/>
        <line x1="45" y1="160" x2="45" y2="170" stroke="#8a7560" stroke-width="2" opacity="0.2"/>
        <line x1="165" y1="160" x2="165" y2="170" stroke="#8a7560" stroke-width="2" opacity="0.2"/>
    </svg>`,
    // 9: 文波楼 - 楼阁和灯笼
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <rect x="60" y="80" width="80" height="80" fill="#8a7560" opacity="0.2"/>
        <path d="M50,80 L100,50 L150,80 Z" fill="#8a7560" opacity="0.25"/>
        <path d="M55,110 L100,85 L145,110 Z" fill="#8a7560" opacity="0.15"/>
        <rect x="85" y="110" width="30" height="35" fill="#6b8e6b" opacity="0.25"/>
        <rect x="90" y="115" width="10" height="12" fill="#e8e0d5" opacity="0.4"/>
        <rect x="100" y="115" width="10" height="12" fill="#e8e0d5" opacity="0.4"/>
        <line x1="100" y1="50" x2="100" y2="35" stroke="#8a7560" stroke-width="2" opacity="0.3"/>
        <ellipse cx="100" cy="30" rx="8" ry="10" fill="#8a7560" opacity="0.2"/>
    </svg>`,
    // 10: 总统府 - 庄严建筑
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <rect x="40" y="90" width="120" height="70" fill="#8a7560" opacity="0.2"/>
        <path d="M30,90 L100,55 L170,90 Z" fill="#8a7560" opacity="0.25"/>
        <rect x="55" y="100" width="18" height="30" fill="#6b8e6b" opacity="0.2"/>
        <rect x="91" y="100" width="18" height="30" fill="#6b8e6b" opacity="0.2"/>
        <rect x="127" y="100" width="18" height="30" fill="#6b8e6b" opacity="0.2"/>
        <rect x="85" y="130" width="30" height="30" fill="#6b8e6b" opacity="0.25"/>
        <circle cx="100" cy="75" r="8" fill="#8a7560" opacity="0.2"/>
        <line x1="30" y1="160" x2="170" y2="160" stroke="#8a7560" stroke-width="2" opacity="0.15"/>
    </svg>`,
    // 11: 鸡鸣寺 - 寺庙和香炉
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <path d="M50,150 L50,80 L100,55 L150,80 L150,150 Z" fill="#8a7560" opacity="0.2"/>
        <path d="M42,80 L100,48 L158,80 Z" fill="#8a7560" opacity="0.25"/>
        <path d="M48,105 L100,78 L152,105 Z" fill="#8a7560" opacity="0.15"/>
        <rect x="85" y="110" width="30" height="40" fill="#6b8e6b" opacity="0.25"/>
        <rect x="30" y="140" width="15" height="20" rx="3" fill="#8a7560" opacity="0.2"/>
        <path d="M37,140 Q37,125 37,120" stroke="#8a7560" stroke-width="1.5" fill="none" opacity="0.3"/>
        <path d="M155,140 Q155,125 155,120" stroke="#8a7560" stroke-width="1.5" fill="none" opacity="0.3"/>
    </svg>`,
    // 12: 红山动物园 - 可爱动物
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <circle cx="70" cy="100" r="30" fill="#6b8e6b" opacity="0.2"/>
        <circle cx="58" cy="88" r="8" fill="#6b8e6b" opacity="0.25"/>
        <circle cx="82" cy="88" r="8" fill="#6b8e6b" opacity="0.25"/>
        <circle cx="64" cy="96" r="3" fill="#5a4e3f" opacity="0.3"/>
        <circle cx="76" cy="96" r="3" fill="#5a4e3f" opacity="0.3"/>
        <ellipse cx="70" cy="106" rx="5" ry="3" fill="#5a4e3f" opacity="0.25"/>
        <circle cx="140" cy="110" r="25" fill="#8a7560" opacity="0.2"/>
        <circle cx="130" cy="100" r="7" fill="#8a7560" opacity="0.25"/>
        <circle cx="150" cy="100" r="7" fill="#8a7560" opacity="0.25"/>
        <circle cx="134" cy="107" r="2.5" fill="#5a4e3f" opacity="0.3"/>
        <circle cx="146" cy="107" r="2.5" fill="#5a4e3f" opacity="0.3"/>
        <ellipse cx="140" cy="116" rx="4" ry="2.5" fill="#5a4e3f" opacity="0.25"/>
        <path d="M90,150 Q100,145 110,150" stroke="#6b8e6b" stroke-width="1.5" fill="none" opacity="0.2"/>
    </svg>`,
    // 13: 尤加利咖啡店 - 咖啡和植物
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <ellipse cx="80" cy="120" rx="30" ry="12" fill="#8a7560" opacity="0.25"/>
        <path d="M50,120 L58,160 L102,160 L110,120 Z" fill="#8a7560" opacity="0.2"/>
        <path d="M110,125 Q130,125 130,138 Q130,150 110,150" stroke="#8a7560" stroke-width="3" fill="none" opacity="0.25"/>
        <path d="M70,110 Q80,100 90,110" stroke="#6b8e6b" stroke-width="2" fill="none" opacity="0.35"/>
        <path d="M75,105 Q80,97 85,105" stroke="#6b8e6b" stroke-width="1.5" fill="none" opacity="0.25"/>
        <line x1="150" y1="160" x2="150" y2="80" stroke="#6b8e6b" stroke-width="3" opacity="0.25"/>
        <ellipse cx="150" cy="70" rx="18" ry="12" fill="#6b8e6b" opacity="0.15"/>
        <ellipse cx="140" cy="90" rx="12" ry="8" fill="#6b8e6b" opacity="0.12" transform="rotate(-20,140,90)"/>
        <ellipse cx="160" cy="85" rx="10" ry="7" fill="#6b8e6b" opacity="0.12" transform="rotate(15,160,85)"/>
    </svg>`,
    // 14: 南湖会堂 - 湖水和亭子
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <path d="M10,140 Q50,125 100,140 T190,140" stroke="#6b8e6b" stroke-width="2.5" fill="none" opacity="0.3"/>
        <path d="M10,152 Q50,140 100,152 T190,152" stroke="#6b8e6b" stroke-width="2" fill="none" opacity="0.22"/>
        <path d="M10,164 Q50,154 100,164 T190,164" stroke="#6b8e6b" stroke-width="1.5" fill="none" opacity="0.15"/>
        <rect x="80" y="80" width="40" height="50" fill="#8a7560" opacity="0.2"/>
        <path d="M72,80 L100,58 L128,80 Z" fill="#8a7560" opacity="0.25"/>
        <rect x="90" y="100" width="8" height="30" fill="#6b8e6b" opacity="0.2"/>
        <rect x="102" y="100" width="8" height="30" fill="#6b8e6b" opacity="0.2"/>
        <circle cx="40" cy="60" r="15" fill="#6b8e6b" opacity="0.12"/>
        <line x1="40" y1="75" x2="40" y2="100" stroke="#6b8e6b" stroke-width="2" opacity="0.15"/>
    </svg>`,
    // 15: 九孔桥 - 多孔拱桥
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <path d="M10,130 Q30,100 50,130 Q70,100 90,130 Q110,100 130,130 Q150,100 170,130 Q185,105 195,130" stroke="#8a7560" stroke-width="3" fill="none" opacity="0.35"/>
        <path d="M10,130 L195,130" stroke="#8a7560" stroke-width="2" opacity="0.25"/>
        <path d="M10,140 Q50,132 100,140 T190,140" stroke="#6b8e6b" stroke-width="1.5" fill="none" opacity="0.2"/>
        <circle cx="160" cy="55" r="18" fill="#8a7560" opacity="0.12"/>
        <line x1="30" y1="100" x2="30" y2="80" stroke="#6b8e6b" stroke-width="2" opacity="0.2"/>
        <circle cx="30" cy="75" r="8" fill="#6b8e6b" opacity="0.12"/>
    </svg>`,
    // 16: 千岛湖 - 岛屿和湖水
    `<svg viewBox="0 0 200 200" class="card-decoration">
        <ellipse cx="60" cy="130" rx="35" ry="15" fill="#6b8e6b" opacity="0.2"/>
        <ellipse cx="140" cy="120" rx="28" ry="12" fill="#6b8e6b" opacity="0.18"/>
        <ellipse cx="100" cy="140" rx="20" ry="8" fill="#6b8e6b" opacity="0.15"/>
        <path d="M5,150 Q50,138 100,150 T195,150" stroke="#6b8e6b" stroke-width="2" fill="none" opacity="0.25"/>
        <path d="M5,162 Q50,152 100,162 T195,162" stroke="#6b8e6b" stroke-width="1.5" fill="none" opacity="0.18"/>
        <line x1="60" y1="130" x2="60" y2="100" stroke="#6b8e6b" stroke-width="2.5" opacity="0.2"/>
        <circle cx="60" cy="95" r="12" fill="#6b8e6b" opacity="0.12"/>
        <line x1="140" y1="120" x2="140" y2="95" stroke="#6b8e6b" stroke-width="2" opacity="0.18"/>
        <circle cx="140" cy="90" r="10" fill="#6b8e6b" opacity="0.1"/>
    </svg>`
];

function showPhotoFlip(index) {
    const photo = photoData[index];
    
    flipImg.src = `./images/${photo.file}`;
    flipDate.textContent = photo.date;
    flipLocation.textContent = photo.location;
    flipLocation.dataset.province = photo.province;
    
    // 添加装饰图案
    const flipBack = document.getElementById('flipBack');
    const oldDecor = flipBack.querySelector('.card-decoration');
    if (oldDecor) oldDecor.remove();
    flipBack.insertAdjacentHTML('beforeend', cardDecorations[index]);
    
    photoFlipOverlay.classList.add('active');
    
    // 抽出 + 翻转，一气呵成（总时间约1.3秒）
    requestAnimationFrame(() => {
        photoFlipCard.classList.add('extracting');
        setTimeout(() => {
            photoFlipCard.classList.remove('extracting');
            photoFlipCard.classList.add('flipped');
        }, 500);
    });
}

function closePhotoFlip() {
    photoFlipCard.classList.remove('flipped', 'extracting');
    
    setTimeout(() => {
        photoFlipOverlay.classList.remove('active');
    }, 300);
}

// 点击卡片本身：翻回正面 → 再点击关闭
photoFlipCard.addEventListener('click', (e) => {
    // 如果点击的是地点链接，不拦截
    if (e.target.closest('.flip-location')) return;
    
    if (photoFlipCard.classList.contains('flipped')) {
        // 当前是背面，翻回正面
        photoFlipCard.classList.remove('flipped');
    } else {
        // 当前是正面，关闭弹窗
        closePhotoFlip();
    }
});

// 点击背景关闭
photoFlipOverlay.addEventListener('click', (e) => {
    if (e.target === photoFlipOverlay) {
        closePhotoFlip();
    }
});

// 点击地点链接跳转到百度地图
flipLocation.addEventListener('click', (e) => {
    e.preventDefault();
    const location = flipLocation.textContent;
    
    // 关闭弹窗
    closePhotoFlip();
    
    // 打开百度地图搜索该地点
    setTimeout(() => {
        const mapUrl = `https://map.baidu.com/search/${encodeURIComponent(location)}/@12958592.5,4825119.5,12z?querytype=s&da_src=shareurl&wd=${encodeURIComponent(location)}&c=1&src=0&pn=0&sug=0&l=12&b=(12894708.18,4770819.5,13022476.82,4879419.5)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=&device_ratio=2`;
        window.open(mapUrl, '_blank');
    }, 500);
});

// ===== Read 圆形书架 =====
function setupBookCircle() {
    const radiusX = 180;
    const radiusY = 150;
    const total = bookOnShelves.length;
    const centerX = 200;
    const centerY = 200;
    
    bookOnShelves.forEach((book, i) => {
        const angle = (360 / total) * i - 90;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radiusX;
        const y = Math.sin(rad) * radiusY;
        
        book.style.left = (centerX + x - 35) + 'px';
        book.style.top = (centerY + y - 45) + 'px';
        book.dataset.baseAngle = angle;
        book.style.transform = 'rotate(0deg)';
    });
    
    const bookContainer = document.querySelector('.book-circle-container');
    if (bookContainer) {
        bookContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            bookScrollSpeed += e.deltaY * 0.3;
        }, { passive: false });
    }
    
    // 第一步：点击书本 → 放大预览
    bookOnShelves.forEach(book => {
        book.addEventListener('click', () => {
            if (bookPreview.classList.contains('active')) return;
            const bookIndex = parseInt(book.getAttribute('data-book'));
            showBookPreview(bookIndex);
        });
    });
}

function updateBookRotation() {
    bookScrollSpeed *= 0.95;
    bookRotation += bookScrollSpeed;
    
    if (bookCircle) {
        bookCircle.style.transform = `rotate(${bookRotation}deg)`;
    }
    
    bookOnShelves.forEach((book) => {
        const baseAngle = parseFloat(book.dataset.baseAngle) || 0;
        book.style.transform = `rotate(${baseAngle + 90 - bookRotation}deg)`;
    });
    
    requestAnimationFrame(updateBookRotation);
}

// ===== 书籍预览与翻页 =====
let currentPreviewIndex = -1;
let currentPageIndex = 0; // 0=第一页(介绍), 1=第二页(摘录), 2=第三页(感受)
let isAnimating = false;

function showBookPreview(index) {
    currentPreviewIndex = index;
    const imgSrc = bookOnShelves[index].querySelector('img').src;
    previewCoverImg.src = imgSrc;
    book3d.classList.remove('opened');
    currentPageIndex = 0;
    isAnimating = false;
    // 重置所有页面状态
    document.querySelectorAll('.book-page').forEach(p => {
        p.classList.remove('flipped', 'animating');
    });
    previewHint.textContent = '点击翻开';
    previewHint.style.opacity = '1';
    bookPreview.classList.add('active');
}

function setupBookPreview() {
    bookPreviewOverlay.addEventListener('click', closeBookPreview);
    
    bookPreviewContent.addEventListener('click', (e) => {
        // 点击提示按钮
        if (e.target.closest('#previewHint')) {
            // 如果书还没翻开，点击"点击翻开"应该打开书
            if (!book3d.classList.contains('opened')) {
                const data = bookData[currentPreviewIndex];
                document.getElementById('bookTitle').textContent = data.title;
                document.getElementById('bookAuthor').textContent = data.author;
                document.getElementById('bookDesc').textContent = data.desc;
                document.getElementById('bookQuote').textContent = data.quote;
                document.getElementById('bookFeeling').textContent = data.feeling;
                book3d.classList.add('opened');
                previewHint.textContent = '点击关闭';
                return;
            }
            // 书已翻开，点击"点击关闭"才关闭
            closeBookPreview();
            return;
        }
        
        // 如果书还没翻开，先翻开
        if (!book3d.classList.contains('opened')) {
            const data = bookData[currentPreviewIndex];
            document.getElementById('bookTitle').textContent = data.title;
            document.getElementById('bookAuthor').textContent = data.author;
            document.getElementById('bookDesc').textContent = data.desc;
            document.getElementById('bookQuote').textContent = data.quote;
            document.getElementById('bookFeeling').textContent = data.feeling;
            book3d.classList.add('opened');
            previewHint.textContent = '点击关闭';
            return;
        }
        
        if (isAnimating) return;
        
        const pages = document.querySelectorAll('.book-page');
        
        // 判断点击的是正面还是背面
        const isBackClick = e.target.closest('.page-back');
        
        if (isBackClick) {
            // 点击背面 - 翻回上一页
            if (currentPageIndex > 0) {
                currentPageIndex--;
                const page = pages[currentPageIndex];
                page.classList.add('animating');
                page.classList.remove('flipped');
                isAnimating = true;
                
                setTimeout(() => {
                    page.classList.remove('animating');
                    isAnimating = false;
                    updatePreviewHint();
                }, 1300);
            }
        } else {
            // 点击正面 - 翻到下一页
            if (currentPageIndex < 2) {
                const page = pages[currentPageIndex];
                page.classList.add('animating');
                page.classList.add('flipped');
                isAnimating = true;
                currentPageIndex++;
                
                setTimeout(() => {
                    page.classList.remove('animating');
                    isAnimating = false;
                    updatePreviewHint();
                }, 1300);
            }
        }
    });
}

function updatePreviewHint() {
    if (currentPageIndex >= 2) {
        // 最后一页，不显示翻页提示
        previewHint.textContent = '点击关闭';
    } else {
        previewHint.textContent = '点击关闭';
    }
}

function closeBookPreview() {
    if (isAnimating) return;
    
    // 先把所有翻开的页面翻回去（合上书）
    const pages = document.querySelectorAll('.book-page');
    let hasFlippedPages = false;
    
    pages.forEach(p => {
        if (p.classList.contains('flipped')) {
            hasFlippedPages = true;
        }
    });
    
    if (hasFlippedPages) {
        // 先合上所有翻开的页面
        isAnimating = true;
        pages.forEach(p => {
            p.classList.remove('flipped');
            p.classList.add('animating');
        });
        currentPageIndex = 0;
        
        setTimeout(() => {
            pages.forEach(p => {
                p.classList.remove('animating');
            });
            isAnimating = false;
            // 合上后再执行关闭缩小动画
            doCloseAnimation();
        }, 1300);
    } else {
        // 没有翻开的页面，直接关闭并缩小
        doCloseAnimation();
    }
}

function doCloseAnimation() {
    book3d.classList.add('closing');
    setTimeout(() => {
        bookPreview.classList.remove('active');
        book3d.classList.remove('opened', 'closing');
        currentPageIndex = 0;
        isAnimating = false;
        currentPreviewIndex = -1;
    }, 800);
}

// ===== 省份地图交互 =====
const provinceData = {
    '四川省': {
        cities: [
            { name: '乐山市', year: '家乡', desc: '我的家乡，一座被三江环抱的古城。乐山大佛依山而建，气势磅礴；峨眉山云雾缭绕，佛光普照。这里的美食更是让人流连忘返——钵钵鸡、甜皮鸭、跷脚牛肉，每一口都是家的味道。', px: 0.52, py: 0.63 },
            { name: '成都市', year: '', desc: '天府之国，一座来了就不想走的城市。宽窄巷子的青砖灰瓦，锦里的红灯笼，武侯祠的三国遗韵，还有那满街的火锅香气和茶馆里的龙门阵，构成了成都独有的悠闲气质。', px: 0.56, py: 0.44 },
            { name: '自贡市', year: '', desc: '千年盐都，恐龙之乡。自贡的井盐开采历史源远流长，恐龙博物馆里藏着亿万年前的秘密。每年的自贡灯会更是璀璨夺目，将这座小城装扮得如梦如幻。', px: 0.65, py: 0.65 },
            { name: '绵阳市', year: '', desc: '中国科技城，李白故里。绵阳既有深厚的历史文化底蕴，又是现代科技的重要基地。越王楼巍峨壮观，富乐山清幽雅致，这座城市的古今交融令人印象深刻。', px: 0.60, py: 0.28 },
            { name: '宜宾市', year: '', desc: '万里长江第一城，三江汇流之地。宜宾以五粮液闻名于世，酒香飘溢整座城市。蜀南竹海翠甲天下，兴文石海奇观迭出，这座川南明珠有着独特的自然与人文魅力。', px: 0.54, py: 0.76 }
        ]
    },
    '湖北省': {
        cities: [
            { name: '武汉市', year: '中南财经政法大学', desc: '我的本科所在地，第二故乡。长江大桥横跨天堑，黄鹤楼俯瞰江城，东湖绿道骑行惬意。热干面、豆皮、鸭脖，武汉的早餐文化丰富得让人惊叹。这座城市的江湖气与书卷气完美融合。', px: 0.72, py: 0.52 },
            { name: '恩施市', year: '', desc: '湖北的香格里拉，恩施大峡谷的绝壁栈道令人叹为观止。土家族的风情浓郁，女儿城的歌舞悠扬。这里的山水保持着最原始的模样，是大自然最慷慨的馈赠。', px: 0.12, py: 0.62 },
            { name: '黄石市', year: '', desc: '青铜古都，钢铁摇篮。黄石国家矿山公园记录了千年的矿冶历史，磁湖的波光粼粼映照着这座工业城市的转型之美。半城山水半城湖，黄石有着独特的城市魅力。', px: 0.82, py: 0.62 }
        ]
    },
    '北京市': {
        cities: [
            { name: '北京市', year: '2021旅行', desc: '2021年，我来到北京。故宫的红墙黄瓦诉说着六百年的沧桑，长城的砖石上刻着历史的厚重。胡同里的鸽哨声、798的艺术气息、后海的夜色，每一处都让我感受到这座城市的独特魅力。', px: 0.50, py: 0.50 }
        ]
    },
    '上海市': {
        cities: [
            { name: '上海市', year: '2018旅行', desc: '2018年，我来到上海。外滩的万国建筑群在夜色中流光溢彩，南京路的繁华熙攘，豫园的古典雅致。这座城市的节奏快得让人眩晕，却又在每个转角藏着精致的生活美学。', px: 0.50, py: 0.50 }
        ]
    },
    '浙江省': {
        cities: [
            { name: '千岛湖', year: '2026旅行', desc: '2026年，我来到千岛湖。碧水如镜，星罗棋布的岛屿若隐若现。乘船穿行其间，仿佛置身于一幅水墨画中。湖水的清澈见底，空气的清新怡人，让人忘却尘世的喧嚣。', px: 0.22, py: 0.42 }
        ]
    },
    '江苏省': {
        cities: [
            { name: '南京市', year: '2026旅行', desc: '2026年，我来到南京。梧桐树刚刚抽芽，总统府的历史沧桑，鸡鸣寺的樱花如雪，红山动物园的万物有灵。这座六朝古都的每一块砖石都在诉说着故事，让人流连忘返。', px: 0.42, py: 0.65 }
        ]
    },
    '广西壮族自治区': {
        cities: [
            { name: '北海市', year: '2023旅行', desc: '2023年，我来到北海。银滩的细沙柔软如粉，洲岛的火山地貌奇特壮观。老街的骑楼建筑承载着百年历史，海鲜市场的鲜活让人大饱口福。这座海滨小城有着独特的南国风情。', px: 0.55, py: 0.92 }
        ]
    },
    '云南省': {
        cities: [
            { name: '大理白族自治州', year: '2024旅行', desc: '2024年，我来到大理。苍山洱海间的风花雪月，古城的青石板路，双廊的日出日落，喜洲的白族民居。在这里，时间仿佛慢了下来，让人真正理解了什么是"诗和远方"。', px: 0.35, py: 0.42 },
            { name: '丽江市', year: '2024旅行', desc: '2024年，我来到丽江。古城的小桥流水，玉龙雪山的巍峨壮观。纳西族的东巴文化神秘而古老，束河古镇比大研古城更加宁静。夜晚的酒吧街热闹非凡，白天的四方街古朴安详。', px: 0.35, py: 0.22 }
        ]
    },
    '湖南省': {
        cities: [
            { name: '长沙市', year: '2025旅行', desc: '2025年，我来到长沙。岳麓书院的书香，橘子洲头的壮阔，太平老街的烟火气。茶颜悦色的甜蜜，臭豆腐的奇香，小龙虾的麻辣。这座城市的活力与热情，让人来了就不想离开。', px: 0.68, py: 0.35 }
        ]
    },
    '重庆市': {
        cities: [
            { name: '重庆市', year: '2023旅行', desc: '2023年，我来到重庆。山城的地形让人惊叹，洪崖洞的夜景如梦如幻，长江索道的飞驰令人心跳，解放碑的繁华彰显都市魅力。火锅的麻辣鲜香，小面的劲道爽滑，重庆的味道让人难以忘怀。', px: 0.50, py: 0.50 }
        ]
    },
    '陕西省': {
        cities: [
            { name: '西安市', year: '2024旅行', desc: '2024年，我来到西安。十三朝古都的历史厚重感扑面而来，兵马俑的壮观震撼，大雁塔的庄严肃穆，回民街的美食琳琅满目。城墙上的骑行，钟鼓楼的夜色，让人仿佛穿越回了大唐盛世。', px: 0.50, py: 0.62 }
        ]
    },
    '福建省': {
        cities: [
            { name: '福州市', year: '2025旅行', desc: '2025年，我来到福州。三坊七巷的古厝连绵，鼓山的摩崖石刻，西湖公园的柳岸花明。鱼丸、肉燕、佛跳墙，福州的美食低调而精致。这座城市的温润气质，如同闽江的水一般绵长。', px: 0.62, py: 0.45 },
            { name: '泉州市', year: '2025旅行', desc: '2025年，我来到泉州。海上丝绸之路的起点，开元寺的东西塔，清净寺的异域风情，埔村的簪花围。这座城市的多元文化交融，让人感受到"半城烟火半城仙"的独特魅力。', px: 0.52, py: 0.65 }
        ]
    },
    '广东省': {
        cities: [
            { name: '广州市', year: '2009旅行', desc: '2009年，我来到广州。珠江夜游的璀璨，陈家祠的精美，上下九的繁华。早茶的精致，烧鹅的香脆，肠粉的滑嫩。这座城市的包容与活力，让人感受到岭南文化的独特魅力。', px: 0.50, py: 0.35 }
        ]
    }
};

function setupProvinceInteraction() {
    const provinceShapes = document.querySelectorAll('.province-shape');
    
    provinceShapes.forEach(shape => {
        const provinceName = shape.getAttribute('data-name');
        const nameElement = document.querySelector(`.province-name[data-for="${provinceName}"]`);
        
        shape.addEventListener('mouseenter', () => {
            if (nameElement) {
                nameElement.classList.add('highlight');
            }
        });
        
        shape.addEventListener('mouseleave', () => {
            if (nameElement) {
                nameElement.classList.remove('highlight');
            }
        });
        
        // 点击已访问省份打开详情弹窗
        if (shape.classList.contains('visited') && provinceData[provinceName]) {
            shape.addEventListener('click', () => {
                showProvinceModal(provinceName, shape);
            });
        }
    });
}

// 省份详情弹窗
const provinceModal = document.getElementById('provinceModal');
const provinceModalOverlay = document.getElementById('provinceModalOverlay');
const provinceModalClose = document.getElementById('provinceModalClose');
const provinceShapeSvg = document.getElementById('provinceShapeSvg');
const provincePathGroup = document.getElementById('provincePathGroup');
const cityMarkersSvgGroup = document.getElementById('cityMarkersSvgGroup');
const provinceInfoTitle = document.getElementById('provinceInfoTitle');
const provinceInfoYear = document.getElementById('provinceInfoYear');
const provinceInfoDesc = document.getElementById('provinceInfoDesc');
let currentCityIndex = 0;
let currentProvinceCities = [];

function showProvinceModal(provinceName, shapeElement) {
    const data = provinceData[provinceName];
    if (!data) return;
    
    currentProvinceCities = data.cities;
    currentCityIndex = 0;
    
    const provinceTransformGroup = document.getElementById('provinceTransformGroup');
    
    // 克隆省份路径（移除原始 transform，避免影响 bbox 计算）
    const pathElement = shapeElement.cloneNode(true);
    pathElement.removeAttribute('transform');
    const provincePathGroup = document.getElementById('provincePathGroup');
    provincePathGroup.innerHTML = '';
    provincePathGroup.appendChild(pathElement);
    
    // 清除旧的城市标记
    cityMarkersSvgGroup.innerHTML = '';
    
    // 清除之前的 transform
    provinceTransformGroup.removeAttribute('transform');
    
    // 临时显示弹窗以计算边界框
    provinceModal.style.visibility = 'visible';
    provinceModal.style.opacity = '0';
    provinceModal.classList.add('active');
    
    requestAnimationFrame(() => {
        const bbox = pathElement.getBBox();
        if (bbox.width === 0 || bbox.height === 0) {
            provinceModal.classList.remove('active');
            provinceModal.style.visibility = '';
            provinceModal.style.opacity = '';
            return;
        }
        
        // 计算缩放和偏移，让省份居中并占满 1000x800 的 viewBox
        const svgW = 1000;
        const svgH = 800;
        const margin = 80;
        const availW = svgW - margin * 2;
        const availH = svgH - margin * 2;
        const scale = Math.min(availW / bbox.width, availH / bbox.height);
        const offsetX = (svgW - bbox.width * scale) / 2 - bbox.x * scale;
        const offsetY = (svgH - bbox.height * scale) / 2 - bbox.y * scale;
        
        // 把 transform 加到父 group 上，省份路径和城市标记一起变换
        provinceTransformGroup.setAttribute('transform', `translate(${offsetX}, ${offsetY}) scale(${scale})`);
        
        // 添加 SVG 城市标记（使用 bbox 内的原始坐标，由 group transform 统一变换）
        data.cities.forEach((city, index) => {
            // 外层 g：定位 + 反向缩放
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.setAttribute('class', 'city-marker-svg' + (index === 0 ? ' active' : ''));
            g.style.animationDelay = (index * 0.3) + 's';
            
            const cx = bbox.x + bbox.width * city.px;
            const cy = bbox.y + bbox.height * city.py;
            
            // 反向缩放，抵消 group 的缩放，让所有标记视觉大小一致
            const invScale = 1 / scale;
            g.setAttribute('transform', `translate(${cx}, ${cy}) scale(${invScale})`);
            
            // 内层 g：只做浮动动画
            const animG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            animG.classList.add('city-marker-anim');
            
            // 倒三角大小：统一固定大小（在本地坐标系中）
            const size = 64;
            
            // 倒三角：顶点在下方，以 (0,0) 为中心
            const trianglePoints = `0,${size * 0.8} ${-size * 0.7},${-size * 0.4} ${size * 0.7},${-size * 0.4}`;
            const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            triangle.setAttribute('points', trianglePoints);
            
            // 白色圆点
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', 0);
            circle.setAttribute('cy', 0);
            circle.setAttribute('r', size * 0.3);
            
            animG.appendChild(triangle);
            animG.appendChild(circle);
            g.appendChild(animG);
            
            g.addEventListener('click', (e) => {
                e.stopPropagation();
                switchCity(index);
            });
            
            cityMarkersSvgGroup.appendChild(g);
        });
        
        // 显示第一个城市的信息
        updateCityInfo(0);
        
        // 正式显示弹窗
        provinceModal.style.visibility = '';
        provinceModal.style.opacity = '';
    });
}

function switchCity(index) {
    if (index === currentCityIndex) return;
    
    // 更新标记状态
    const markers = cityMarkersSvgGroup.querySelectorAll('.city-marker-svg');
    markers.forEach((m, i) => {
        m.classList.toggle('active', i === index);
    });
    
    currentCityIndex = index;
    updateCityInfo(index);
}

function updateCityInfo(index) {
    const city = currentProvinceCities[index];
    provinceInfoTitle.textContent = city.name;
    provinceInfoYear.textContent = city.year;
    provinceInfoDesc.textContent = city.desc;
}

function closeProvinceModal() {
    provinceModal.classList.remove('active');
}

provinceModalOverlay.addEventListener('click', closeProvinceModal);
provinceModalClose.addEventListener('click', closeProvinceModal);

// ===== 塔罗牌卡片交互 =====
function setupTarotCards() {
    const tarotCards = document.querySelectorAll('.tarot-card-wrapper');
    
    // 用 Canvas 处理白色边框变透明
    document.querySelectorAll('.tarot-back-img').forEach(img => {
        img.addEventListener('load', function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;
            ctx.drawImage(this, 0, 0);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            // 将接近白色的像素变为透明
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i], g = data[i+1], b = data[i+2];
                // 白色或接近白色的像素（RGB都大于240）
                if (r > 235 && g > 235 && b > 235) {
                    data[i+3] = 0; // alpha = 0，完全透明
                }
            }
            
            ctx.putImageData(imageData, 0, 0);
            this.src = canvas.toDataURL('image/png');
            this.style.mixBlendMode = 'normal'; // 移除 multiply
        });
        
        // 如果图片已缓存
        if (this.complete) {
            this.dispatchEvent(new Event('load'));
        }
    });
    
    // 填充年龄下拉框 (0-100岁)
    const ageSelect = document.querySelector('.form-select');
    if (ageSelect) {
        for (let i = 0; i <= 100; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i + '岁';
            ageSelect.appendChild(option);
        }
    }
    
    // 音乐播放器 - 黑胶唱片旋转动画 + 进度条
    const playBtn = document.getElementById('playBtn');
    const vinylDisc = document.getElementById('vinylDisc');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.querySelector('.current-time');
    let isPlaying = false;
    let progressInterval = null;
    const totalSeconds = 222; // 3:42
    
    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
    }
    
    function updateProgress() {
        if (!progressBar) return;
        const val = parseInt(progressBar.value);
        const current = Math.floor(totalSeconds * val / 100);
        if (currentTimeEl) currentTimeEl.textContent = formatTime(current);
    }
    
    if (progressBar) {
        progressBar.addEventListener('input', function() {
            updateProgress();
        });
    }
    
    if (playBtn) {
        playBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            isPlaying = !isPlaying;
            vinylDisc.classList.toggle('spinning', isPlaying);
            playBtn.querySelector('.play-icon').style.display = isPlaying ? 'none' : '';
            playBtn.querySelector('.pause-icon').style.display = isPlaying ? '' : 'none';
            
            if (isPlaying) {
                progressInterval = setInterval(function() {
                    if (progressBar && parseInt(progressBar.value) < 100) {
                        progressBar.value = parseInt(progressBar.value) + 1;
                        updateProgress();
                    } else {
                        isPlaying = false;
                        vinylDisc.classList.remove('spinning');
                        playBtn.querySelector('.play-icon').style.display = '';
                        playBtn.querySelector('.pause-icon').style.display = 'none';
                        clearInterval(progressInterval);
                    }
                }, 1000);
            } else {
                clearInterval(progressInterval);
            }
        });
    }
    
    // 留言表单 - 通过 mailto 发送邮件
    const msgSubmit = document.getElementById('msgSubmit');
    if (msgSubmit) {
        msgSubmit.addEventListener('click', function(e) {
            e.stopPropagation();
            const name = document.getElementById('msgName').value.trim();
            const contact = document.getElementById('msgContact').value.trim();
            const age = document.getElementById('msgAge').value;
            const content = document.getElementById('msgContent').value.trim();
            
            if (!name || !contact || !age || !content) {
                alert('请填写完整信息后再提交');
                return;
            }
            
            const subject = encodeURIComponent(`来自 ${name} 的留言`);
            const body = encodeURIComponent(
                `称呼：${name}\n联系方式：${contact}\n年龄：${age}岁\n\n留言内容：\n${content}`
            );
            
            window.location.href = `mailto:pumpkin3157@163.com?subject=${subject}&body=${body}`;
            
            // 清空表单
            document.getElementById('msgName').value = '';
            document.getElementById('msgContact').value = '';
            document.getElementById('msgAge').selectedIndex = 0;
            document.getElementById('msgContent').value = '';
        });
    }
    
    // 卡片翻转交互
    tarotCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果点击的是表单元素，不触发翻转
            if (e.target.tagName === 'INPUT' || 
                e.target.tagName === 'TEXTAREA' || 
                e.target.tagName === 'SELECT' || 
                e.target.tagName === 'BUTTON' ||
                e.target.closest('.message-form')) {
                return;
            }
            
            this.classList.toggle('flipped');
        });
    });

    // 音乐卡片：翻卡后 hover 黑胶区域显示悬浮提示
    const musicCard = document.querySelector('[data-card="2"]');
    if (musicCard) {
        const vinylWrapper = musicCard.querySelector('.vinyl-wrapper');
        const tooltip = musicCard.querySelector('.vinyl-tooltip-box');
        if (vinylWrapper && tooltip) {
            vinylWrapper.addEventListener('mouseenter', function() {
                if (musicCard.classList.contains('flipped')) {
                    tooltip.classList.add('show');
                }
            });
            vinylWrapper.addEventListener('mouseleave', function() {
                tooltip.classList.remove('show');
            });
        }
    }
}

function handleScroll() {
    updateNavHighlight();
    updateYarnConnector();
    updateTimelineAutoWalk();
    checkVisibility();
}

function updateNavHighlight() {
    const sections = document.querySelectorAll('.section');
    let currentSection = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

function checkVisibility() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    // 封面卡片
    sectionCards.forEach((card, index) => {
        const cardTop = card.offsetTop;
        if (scrollY + windowHeight > cardTop + 100) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 120);
        }
    });
    
    // 地图省份 - 滚动进入视口时显示
    const provinceShapes = document.querySelectorAll('.province-shape');
    const travelSection = document.getElementById('travel');
    if (travelSection) {
        const rect = travelSection.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8) {
            provinceShapes.forEach((shape, index) => {
                setTimeout(() => {
                    shape.style.opacity = '1';
                    shape.style.transform = 'scale(1)';
                }, index * 100);
            });
        }
    }
    
    // About卡片
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach((card, index) => {
        const cardTop = card.offsetTop;
        if (scrollY + windowHeight > cardTop + 100) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 120);
        }
    });
}

// 启动书籍旋转动画
requestAnimationFrame(updateBookRotation);

// 页面加载完成
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
