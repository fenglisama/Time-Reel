document.addEventListener('DOMContentLoaded', () => {
  // Universe modal functionality
  const universeCards = document.querySelectorAll('.universe-card');
  const universeModal = document.getElementById('universe-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const closeModal = document.getElementById('close-modal');
  
  // Universe details data
  const universeDetails = {
    steampunk: {
      title: '蒸汽朋克宇宙',
      content: `
        <div class="prose prose-invert max-w-none">
          <p>在这个宇宙中，蒸汽动力技术在19世纪初期取得了突破性发展，工业革命提前了近半个世纪。城市被巨大的齿轮、铜管和烟囱所覆盖，空气中弥漫着煤炭和机油的气味。</p>
          
          <h4 class="mt-4 mb-2">主要特征</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>蒸汽动力是社会的主要能源</li>
            <li>机械装置与发条机器人随处可见</li>
            <li>维多利亚时代的社会结构与时尚</li>
            <li>空气污染和阶级差距严重</li>
          </ul>
          
          <h4 class="mt-4 mb-2">觉醒者角色</h4>
          <p>觉醒者在这个世界中常常是工程师和发明家，他们寻找清洁能源替代煤炭，或是利用自己的记忆技术改进机械设计。在这个宇宙中，记忆可以通过特殊的黄铜装置被提取并储存在水晶瓶中。</p>
          
          <h4 class="mt-4 mb-2">赎罪挑战</h4>
          <p>蒸汽朋克宇宙的赎罪挑战通常与环境修复有关。觉醒者需要发明一种能够净化空气的装置，或是在不破坏社会结构的前提下推动清洁能源革命。</p>
        </div>
      `
    },
    magic: {
      title: '魔法世界',
      content: `
        <div class="prose prose-invert max-w-none">
          <p>在魔法世界中，自然力量与人类意志紧密相连。几百年前的一场大魔法战争导致文明几乎崩溃，存活下来的人们在废墟上重建了新的社会，对强大魔法的使用有着严格限制。</p>
          
          <h4 class="mt-4 mb-2">主要特征</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>魔法是日常生活的一部分</li>
            <li>魔法学院和魔法议会管理魔法使用</li>
            <li>存在多种魔法流派和传统</li>
            <li>大型魔法禁区（战争遗迹）分布各地</li>
          </ul>
          
          <h4 class="mt-4 mb-2">觉醒者角色</h4>
          <p>觉醒者在魔法世界中通常是法师和巫师，他们拥有从上一个轮回中保留下来的魔法知识。在这个宇宙中，记忆可以被具象化为魔法卷轴，情绪则是施法的核心力量源泉。</p>
          
          <h4 class="mt-4 mb-2">赎罪挑战</h4>
          <p>魔法世界的赎罪挑战往往涉及修复魔法战争造成的伤害，或是平衡被扭曲的魔法力量。觉醒者可能需要封印危险的魔法遗物，或是恢复被战争破坏的自然平衡。</p>
        </div>
      `
    },
    biopunk: {
      title: '生物朋克宇宙',
      content: `
        <div class="prose prose-invert max-w-none">
          <p>生物技术主导的世界，人们能够通过基因工程改造自己的身体和能力。然而，一场基因病毒的爆发导致大规模变异危机，社会陷入混乱。</p>
          
          <h4 class="mt-4 mb-2">主要特征</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>生物改造和基因定制服务普遍</li>
            <li>人体与植物、动物基因融合的混合体</li>
            <li>巨型生物建筑和有机技术</li>
            <li>变异区域及隔离社区</li>
          </ul>
          
          <h4 class="mt-4 mb-2">觉醒者角色</h4>
          <p>觉醒者通常是基因工程师和医生，利用自己的知识寻找解决变异危机的方法。在这个宇宙中，记忆以RNA序列的形式存储，可以通过特殊的生物注射器进行提取和传递。</p>
          
          <h4 class="mt-4 mb-2">赎罪挑战</h4>
          <p>生物朋克宇宙的赎罪挑战通常涉及治愈那些变异者，或是研发出对抗基因病毒的解药。有时，觉醒者需要面对自己可能是变异危机始作俑者的可能性。</p>
        </div>
      `
    },
    cyberpunk: {
      title: '赛博朋克宇宙',
      content: `
        <div class="prose prose-invert max-w-none">
          <p>数字技术高度发达的世界，巨型企业控制着社会的方方面面。贫富差距巨大，底层人民生活在永不熄灭的霓虹灯和无尽的监控之下。</p>
          
          <h4 class="mt-4 mb-2">主要特征</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>全息投影和增强现实技术普及</li>
            <li>人体机械增强和脑机接口</li>
            <li>网络空间与物理世界界限模糊</li>
            <li>企业控制的城市区域与无法地带</li>
          </ul>
          
          <h4 class="mt-4 mb-2">觉醒者角色</h4>
          <p>觉醒者多为黑客和网络安全专家，能够潜入虚拟世界窃取和植入记忆。在这个宇宙中，记忆以数据的形式存储在神经植入物中，可以通过网络传输和交易。</p>
          
          <h4 class="mt-4 mb-2">赎罪挑战</h4>
          <p>赛博朋克宇宙的赎罪挑战往往与打破巨型企业的垄断，或是揭露它们的秘密有关。觉醒者可能需要传播关键信息，或是在数字和物理的战场上对抗强大的敌人。</p>
        </div>
      `
    },
    wasteland: {
      title: '末日废土宇宙',
      content: `
        <div class="prose prose-invert max-w-none">
          <p>核战争后的世界，大部分地区变成了辐射废土。资源稀缺，小型社区在荒野中艰难生存，常常需要与辐射变异体和掠夺者作战。</p>
          
          <h4 class="mt-4 mb-2">主要特征</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>资源匮乏，废物回收成为主要生存方式</li>
            <li>辐射区域和清洁区的明显对比</li>
            <li>部落和小型聚居地分散各处</li>
            <li>战前技术成为珍贵的寻宝目标</li>
          </ul>
          
          <h4 class="mt-4 mb-2">觉醒者角色</h4>
          <p>觉醒者是幸存者和战士，保留着关于末日前世界的记忆。在这个宇宙中，记忆成为最珍贵的资源之一，通过口述历史和实物记忆装置传递。</p>
          
          <h4 class="mt-4 mb-2">赎罪挑战</h4>
          <p>末日废土宇宙的赎罪挑战涉及恢复环境或保护无辜者。觉醒者或许需要找到一种净化辐射的方法，或是建立一个真正安全的避难所。</p>
        </div>
      `
    },
    utopia: {
      title: '乌托邦宇宙',
      content: `
        <div class="prose prose-invert max-w-none">
          <p>表面上完美和谐的世界，科技发达，社会问题看似已经解决。然而，随着故事深入，乌托邦的裂缝逐渐显现，维持表面和平的代价浮出水面。</p>
          
          <h4 class="mt-4 mb-2">主要特征</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>白色和玻璃构成的洁净城市</li>
            <li>人工智能辅助的社会规划</li>
            <li>表面上不存在的贫困和犯罪</li>
            <li>城市边缘隐藏的"异常区"</li>
          </ul>
          
          <h4 class="mt-4 mb-2">觉醒者角色</h4>
          <p>觉醒者是调解员和社会工作者，他们能够看穿乌托邦的表象。在这个宇宙中，负面记忆和情绪被系统性地删除和抑制，觉醒者的任务是恢复真实的情感体验。</p>
          
          <h4 class="mt-4 mb-2">赎罪挑战</h4>
          <p>乌托邦宇宙的赎罪挑战在于揭示真相，而不破坏社会结构。觉醒者需要找到一种方式，让人们面对被掩盖的真相，同时避免社会崩溃。</p>
        </div>
      `
    },
    ancient: {
      title: '历史架空宇宙',
      content: `
        <div class="prose prose-invert max-w-none">
          <p>这个世界以中国古代为背景，历史发展与我们熟知的不同。朝代、人物和事件被重新编排，形成一个熟悉又陌生的世界。</p>
          
          <h4 class="mt-4 mb-2">主要特征</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>古代中国的建筑和文化元素</li>
            <li>儒道墨法等思想学派的重新诠释</li>
            <li>官僚和江湖的双重社会结构</li>
            <li>神秘的丝绸之路贸易网络</li>
          </ul>
          
          <h4 class="mt-4 mb-2">觉醒者角色</h4>
          <p>觉醒者是侠客和义士，他们游走于官方和民间。在这个宇宙中，记忆通过特殊的书画和诗词传递，情绪则通过音律和茶道表达。</p>
          
          <h4 class="mt-4 mb-2">赎罪挑战</h4>
          <p>历史架空宇宙的赎罪挑战通常与匡扶正义、抵抗暴政有关。觉醒者需要在不引发大规模战争的情况下，推动社会变革和公平正义的实现。</p>
        </div>
      `
    }
  };

  // Open modal with universe details
  universeCards.forEach(card => {
    card.addEventListener('click', () => {
      const universe = card.dataset.universe;
      const details = universeDetails[universe];
      
      if (details) {
        modalTitle.textContent = details.title;
        modalContent.innerHTML = details.content;
        universeModal.classList.add('visible');
        universeModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    universeModal.classList.remove('visible');
    setTimeout(() => {
      universeModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  });

  // Close modal on click outside
  universeModal.addEventListener('click', (e) => {
    if (e.target === universeModal) {
      closeModal.click();
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && universeModal.style.display === 'flex') {
      closeModal.click();
    }
  });

  // Simulate memory capacity warning
  const memoryUnits = document.querySelectorAll('.memory-unit');
  let warningActive = false;

  setInterval(() => {
    if (!warningActive) {
      memoryUnits[8].classList.add('animate-pulse');
      warningActive = true;
      setTimeout(() => {
        memoryUnits[8].classList.remove('animate-pulse');
        warningActive = false;
      }, 2000);
    }
  }, 5000);

  // Animate quantum meter
  const quantumMeter = document.querySelector('.quantum-meter');
  let increasing = true;
  let width = 65;

  setInterval(() => {
    if (increasing) {
      width += 1;
      if (width >= 70) increasing = false;
    } else {
      width -= 1;
      if (width <= 60) increasing = true;
    }
    quantumMeter.style.width = `${width}%`;
  }, 300);
});
