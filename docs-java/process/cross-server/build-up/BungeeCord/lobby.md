---
title: 登录/大厅服
sidebar_position: 3
---

# 登录/大厅服

在你的服务器配置登录服或大厅服。

登录服和大厅服在原理上一样，所以这里只讲解登录服。

在 config.yml 中找到：

```YAML
  # 优先服务器列表 玩家将优先加入靠上设置的子服，进不去会尝试下一个子服
  priorities:
  - lobby
```

在这里只配置你的登录服，不要将游戏服写在这里！

否则当你的登录服因为某些原因崩溃时，玩家可以随意登录其他人账号，绕过登录直接加入游戏服。

```mermaid
flowchart TD
玩家 --> 登录服 --> 游戏服
玩家 -->|登录服炸了| 游戏服
```

- **在你的登录服安装 [登录插件](/docs-java/process/plugin/other/Login/Login.md)**

提供登录验证。

如果你使用 AuthMe，建议在 BungeeCord / Waterfall 安装 [AuthMeBungee](https://www.spigotmc.org/resources/.50219)。

- **在你的登录服安装 [大厅插件](/docs-java/process/plugin/WorldManagement/lobby/lobby.md)**

提供各种大厅常用的功能如：

- 世界保护
- 关闭雨雪
- 关闭伤害
- 二段跳
- 物品栏菜单
- 掉虚空返回
- 阻止丢出物品

当然你也可以不用大厅插件，用别的插件来补全这些功能。

- **在你的登录服安装提供跨服传送的插件**

使用这些插件将你的玩家从登录服传送到其他子服，可参考 [加入服务器](../../join-server.md)。
