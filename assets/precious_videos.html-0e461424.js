import{_ as n,o as s,c as t,e as a}from"./app-d3360575.js";const p={},o=a(`<h1 id="入站必刷视频" tabindex="-1"><a class="header-anchor" href="#入站必刷视频" aria-hidden="true">#</a> 入站必刷视频</h1><h2 id="获取入站必刷视频" tabindex="-1"><a class="header-anchor" href="#获取入站必刷视频" aria-hidden="true">#</a> 获取入站必刷视频</h2><blockquote><p>https://api.bilibili.com/x/web-interface/popular/precious</p></blockquote><p><strong>url参数：</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>page</td><td>num</td><td>页码</td><td>非必要</td><td>默认为<code>1</code></td></tr><tr><td>page_size</td><td>num</td><td>每页数量</td><td>非必要</td><td>默认为<code>85</code></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>array</td><td>视频列表</td><td></td></tr></tbody></table><p><code>data</code> 字段：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>标题</td><td>入站必刷</td></tr><tr><td>media_id</td><td>int</td><td>media_id</td><td></td></tr><tr><td>explain</td><td>string</td><td>解释（概括）</td><td>我不允许还有人没看过这85个宝藏视频！</td></tr><tr><td>list</td><td>list</td><td>列表</td><td></td></tr></tbody></table><p><code>data</code> 中的 <code>list</code> 字段：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>int</td><td>aid</td><td></td></tr><tr><td>videos</td><td>int</td><td>视频数?</td><td></td></tr><tr><td>tid</td><td>int</td><td>分区 id</td><td></td></tr><tr><td>tname</td><td>string</td><td>分区名称</td><td></td></tr><tr><td>copyright</td><td>int</td><td>版权</td><td></td></tr><tr><td>pic</td><td>url</td><td>封面 url</td><td></td></tr><tr><td>title</td><td>string</td><td>标题</td><td></td></tr><tr><td>pubdate</td><td>int</td><td>发布时间</td><td>时间戳</td></tr><tr><td>ctime</td><td>int</td><td>暂不清楚</td><td>时间戳</td></tr><tr><td>desc</td><td>string</td><td>简介</td><td></td></tr><tr><td>state</td><td>int</td><td>暂不清楚</td><td></td></tr><tr><td>duration</td><td>int</td><td>视频时长</td><td>单位为秒</td></tr><tr><td>mission_id</td><td>int</td><td>暂不清楚</td><td></td></tr><tr><td>rights</td><td>dict</td><td>暂不清楚</td><td>好像没啥么用</td></tr><tr><td>owner</td><td>dict</td><td>作者</td><td></td></tr><tr><td>stat</td><td>dict</td><td>状态</td><td></td></tr><tr><td>dynamic</td><td>string</td><td>动态发布时写的文字</td><td></td></tr><tr><td>cid</td><td>int</td><td>cid</td><td></td></tr><tr><td>dimension</td><td>dict</td><td>视频的一些属性</td><td></td></tr><tr><td>season_id</td><td>int</td><td>暂不清楚</td><td></td></tr><tr><td>short_link</td><td>string</td><td>短链</td><td></td></tr><tr><td>short_link_v2</td><td>string</td><td>短链</td><td>第二版</td></tr><tr><td>bvid</td><td>string</td><td>bvid</td><td></td></tr><tr><td>season_type</td><td>int</td><td>分区 tid?</td><td></td></tr><tr><td>is_ogv</td><td>bool</td><td>暂不清楚</td><td></td></tr><tr><td>ogv_info</td><td>dict/null?</td><td>暂不清楚</td><td></td></tr><tr><td>rcmd_reason</td><td>string?</td><td>暂不清楚</td><td></td></tr><tr><td>achievement</td><td>string</td><td>荣誉概述</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/popular/precious&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应事例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;入站必刷&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span><span class="token number">496307088</span><span class="token punctuation">,</span>
        <span class="token property">&quot;explain&quot;</span><span class="token operator">:</span><span class="token string">&quot;我不允许还有人没看过这85个宝藏视频！&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span><span class="token number">715024588</span><span class="token punctuation">,</span>
                <span class="token property">&quot;videos&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tid&quot;</span><span class="token operator">:</span><span class="token number">233</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tname&quot;</span><span class="token operator">:</span><span class="token string">&quot;极客DIY&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;copyright&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://i1.hdslb.com/bfs/archive/55ce9a4d1797ec56a0d4ed727f1a279b89ec3664.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;【才浅】15天花20万元用500克黄金敲数万锤纯手工打造三星堆黄金面具&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pubdate&quot;</span><span class="token operator">:</span><span class="token number">1618207101</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span><span class="token number">1618207101</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span><span class="token string">&quot;倾家荡产求三连支持！！！请大家帮忙给新系列想个名字，点赞一百万的话制作三星堆黄金权杖，不会真的可以点到一百万吧\\nbgm:\\n-Old-B - 【Free Beat】侠之道 、于剑飞 - 01 片头曲 帝陵、AniFace - 夜辞秋江&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;state&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span><span class="token number">717</span><span class="token punctuation">,</span>
                <span class="token property">&quot;mission_id&quot;</span><span class="token operator">:</span><span class="token number">16881</span><span class="token punctuation">,</span>
                <span class="token property">&quot;rights&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;bp&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;elec&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;download&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;movie&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pay&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hd5&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;no_reprint&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;autoplay&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;ugc_pay&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;is_cooperation&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;ugc_pay_preview&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;no_background&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;arc_pay&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pay_free_watch&quot;</span><span class="token operator">:</span><span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;owner&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span><span class="token number">2200736</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;才疏学浅的才浅&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;face&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://i2.hdslb.com/bfs/face/1f4819b224cd882025a9a6a5f2c6680c332f37bc.jpg&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;stat&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span><span class="token number">715024588</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;view&quot;</span><span class="token operator">:</span><span class="token number">13833908</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;danmaku&quot;</span><span class="token operator">:</span><span class="token number">215105</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;reply&quot;</span><span class="token operator">:</span><span class="token number">39792</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;favorite&quot;</span><span class="token operator">:</span><span class="token number">619513</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;coin&quot;</span><span class="token operator">:</span><span class="token number">2484204</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;share&quot;</span><span class="token operator">:</span><span class="token number">122302</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;now_rank&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;his_rank&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;like&quot;</span><span class="token operator">:</span><span class="token number">2338710</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;dislike&quot;</span><span class="token operator">:</span><span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;dynamic&quot;</span><span class="token operator">:</span><span class="token string">&quot;倾家荡产求三连！！&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;cid&quot;</span><span class="token operator">:</span><span class="token number">323723441</span><span class="token punctuation">,</span>
                <span class="token property">&quot;dimension&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;width&quot;</span><span class="token operator">:</span><span class="token number">1920</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;height&quot;</span><span class="token operator">:</span><span class="token number">1080</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;rotate&quot;</span><span class="token operator">:</span><span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;season_id&quot;</span><span class="token operator">:</span><span class="token number">19992</span><span class="token punctuation">,</span>
                <span class="token property">&quot;short_link&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://b23.tv/BV16X4y1g7wT&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;short_link_v2&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://b23.tv/BV16X4y1g7wT&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span><span class="token string">&quot;BV16X4y1g7wT&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;season_type&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;is_ogv&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ogv_info&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">&quot;rcmd_reason&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;achievement&quot;</span><span class="token operator">:</span><span class="token string">&quot;央视新华社点赞，博物馆喊话来上班！&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> 
            ...
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,15),e=[o];function d(r,c){return s(),t("div",null,e)}const i=n(p,[["render",d],["__file","precious_videos.html.vue"]]);export{i as default};
