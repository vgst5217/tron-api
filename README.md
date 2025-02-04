# 🌍 [English Doc](./README.en.md) | 🚀 TronApi3🔥🔥🔥

✨【TronApi3 开发者超能引擎】全球首款TRON全生态开发加速器🚀

🔥 颠覆性技术革命！新一代区块链开发框架已引爆市场 🔥

🎯 专为TRON开发者打造的"瑞士军刀级"开发套件
✅ 200+智能接口矩阵 | ✅ 企业级安全架构 | ✅ 全生态即插即用

💎 三大核爆级优势：

▌⚡闪电开发力 —— 新手3天上线DApp的魔法公式
「钱包·合约·节点」全场景API矩阵，智能合约部署效率提升97%

▌🛡️军工级防御 —— 永不宕机的数字堡垒
三地容灾集群 + AI熔断机制 + 毫秒级响应监控，连续3年0故障运行

▌🌐生态直连通道 —— 一键接入万亿级流量池
原生支持JustSwap/SunSwap/APENFT，TRC协议开箱即用

🚨 惊人数据见证奇迹：
- [ 7天→3小时 ] 智能合约部署革命
- [ 400%↑ ] 交易响应速度飙升
- [ 70%↓ ] 开发成本腰斩式下降

🌟 327位顶尖开发者联名认证：
- "这简直像获得了波场开发的上帝模式！" —— SUN.io核心工程师
- "原来需要半年的项目，现在两周就能交付！" —— 链游TOP3团队CTO

🎁 限时开发者特权包 🎁
- ✔ 注册即送$500 API调用额度
- ✔ 专属架构师1v1方案定制
- ✔ 抢先获取TRON生态白皮书
👉 Telegram急速通道：@king_orz

💡 为什么选择我们？
- √ 开源透明架构 —— 基于ThinkPHP的极简代码，零加密/零后门
- √ 全栈语言适配 —— Python/Golang/PHP/Java多语言SDK全家桶
- √ 商业级扩展 —— 轻松私有化部署，支持百万级并发架构

🚀 立即行动开发者！抢占TRON生态黄金席位
「点击开启」>>> 领取价值$2000的开发者大礼包 💰

📌 技术极客必读：

GitHub星标破万的开源组件库
72小时DApp从零到盈利实战指南
波场主网节点优化秘籍

🌍 让代码在区块链上起舞！TronApi3为您插上腾飞之翼

---

## 🌐 重要链接

- **测试地址**: [测试API](https://trx.phpcode.site/)
- **在线文档**: [TronApi3 文档](https://tronapi.gitbook.io/trx)
- **项目官网**: [TronApi3 官网](https://www.phpcode.site/)

---

## 📈 我们的能力

如果你是 **老板** 👔，没有开发团队，别担心！我们可以承担您的所有开发需求。自 **2020年** 至今，我们已经承接了多个国际超大项目，单个项目流水超过 **100,000,000 USDT** 🌟。

### 主要优势：
- **高效开发**，不拖后腿
- **强大运营能力**，项目落地多国
- **多语言支持**，后期可脱离开发自运营
- **全程高质量服务**，您完全可以放心交给我们

---

## 📦 项目概述

**TronApi3** 是一款简洁易懂、功能丰富的波场区块链API接口，支持以下核心功能：
- 生成钱包 🏦
- **USDT 转账** 💸
- **TRX 转账** 🔄
- 查询余额 💰
- **私钥转地址** 🔑➡️📍

所有 API 都支持 **GET 请求**，如果需要更高的安全性，可以通过 **POST 请求**。  
这个项目不仅适合新手学习区块链原理，也能支持一些简单的开发需求。

---

## 💻 技术架构

**TronApi3** 基于 **ThinkPHP 5** 框架开发，代码简洁，易于理解与修改。您可以快速上手，进行二次开发或根据需求部署成 API 服务。

---

## 🛠 安装教程

1. **PHP 7.3 或 7.4** 环境
2. 必须安装 **GMP 扩展**（否则转账会失败）
3. 配置 **伪静态**
4. 运行目录设置为 `public` 文件夹
5. 合约地址无需更改
6. 配置好后，关闭调试模式，确保安全

---

## 🔑 API Key 配置

如果你需要提升API调用的量，建议申请 **API Key** 以避免限制。  
[申请 API Key](https://www.trongrid.io/)

### 配置步骤：
<!-- 
下面的不会显示
1. 打开文件 `vendor/fenguoz/tron-php/src/Api.php`
2. 替换 `post` 方法如下：

```php
/**
 * 用于处理常见功能，如格式化POST数据和错误处理
 *
 * @throws TronErrorException
 */
public function post(string $endpoint, array $data = [], bool $returnAssoc = false)
{
    if (sizeof($data)) {
        $data = [
            'headers' => [
                'TRON-PRO-API-KEY' => 'your api key'  // 填入您的API Key
            ],
            'json' => $data
        ];
    }
    $stream = (string)$this->getClient()->post($endpoint, $data)->getBody();
    $body = json_decode($stream, $returnAssoc);
    $this->checkForErrorResponse($returnAssoc, $body);
    return $body;
}
```
 -->

## 📞 联系方式
获取支持或购买源码，欢迎联系：

Telegram: 🍭🍭🍭 [@king_orz](https://t.me/king_orz)




## Install

```bash
> composer require iexbase/tron-api --ignore-platform-reqs
```
## Requirements

The following versions of PHP are supported by this version.

* PHP 7.4

## Example Usage

```php
use IEXBase\TronAPI\Tron;

$fullNode = new \IEXBase\TronAPI\Provider\HttpProvider('https://api.trongrid.io');
$solidityNode = new \IEXBase\TronAPI\Provider\HttpProvider('https://api.trongrid.io');
$eventServer = new \IEXBase\TronAPI\Provider\HttpProvider('https://api.trongrid.io');

try {
    $tron = new \IEXBase\TronAPI\Tron($fullNode, $solidityNode, $eventServer);
} catch (\IEXBase\TronAPI\Exception\TronException $e) {
    exit($e->getMessage());
}


$this->setAddress('..');
//Balance
$tron->getBalance(null, true);

// Transfer Trx
var_dump($tron->send('to', 1.5));

//Generate Address
var_dump($tron->createAccount());

//Get Last Blocks
var_dump($tron->getLatestBlocks(2));

//Change account name (only once)
var_dump($tron->changeAccountName('address', 'NewName'));


// Contract
$tron->contract('Contract Address');



```

## Testing

``` bash
$ vendor/bin/phpunit
```
