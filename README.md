## GIT

### 命令行窗口
- 我们平时使用计算机都是通过可视化的界面来对电脑发送命令
    + 鼠标右键->新建->新建文件夹
- 命令行窗口也是一种可以向计算机发送命令的途径
    + 通过命令的形式告诉计算机我们要做什么
    + mkdir 文件夹的名字
- 开启命令行
    + win + R -> cmd -> enter
- 常用命令行工具
    + cmd
    + powershell
    + git bash

### 常用命令
- pwd (print working directory) 查看当前所在的目录
- cd (change directory) 切换目录
- ls (list) 查看当前目录下的内容
- clear 清屏
- mkdir (make directory) 创建目录
- touch 创建文件
- cat 查看文件内容 一次性将所有内容输出
- less 查看文件内容 每一次查看部分文件内容
    + 回车 一次向下走一行
    + 空格 一次向下走一页
    + b    一次向上走一页
    + q    退出
- rm (remove) 删除文件 如 rm index.html、rm -rf blog
- rmdir (remove directory) 删除文件夹 只能删除空文件夹 不常用
- mv (move) 移动文件或重命名
- cp (copy) 复制文件
- echo '内容' > 文件 输出内容到文件 每次输出都是覆盖原有文件内容
- ehco '内容' >> 文件 输出内容到文件 每次输出都是追新内容
- 命令的基本组成部分
    + rm(删除命令) -rf(选项)

### GIT是什么
- 版本控制工具
    + 例子：
        * 人事专员管理职工信息
        * 项目功能变更导致的问题
        * 多人开发一个项目 代码共享时的问题

### GIT三大区域
- 工作目录
    + 存放项目代码的目录
- 暂存区
    + 临时存放更改的了文件
    + 防止工作目录中的代码丢失
- 代码仓库
    + 当开发的功能足以形成一个版本的时候 可以将代码形成版本提交到仓库
    + 相当于复制了一份当前的代码存储到了仓库中

### GIT常用命令
- 配置git用户名和邮箱
    + git config --global user.name zhangsan
    + git config --global user.email zhangsan@163.com
- 查看当前的git配置
    + git config --list
- 初始化git仓库
    + git init
- 查看当前仓库的状态 
    + git status
- 将工作目录中的文件添加到暂存区
    + git add
- 将暂存区中的代码提交到本地仓库 形成一个版本
    + git commit -m 备注 
- 查看本地仓库中的历史提交版本
    + git log 
- 将暂存区中的文件恢复到工作目录
    + git rm --cached 文件列表 
    + 说明:
        * 必须保证工作目录中的代码和暂存区中的代码一致
        * 此时工作目录中有此文件 暂存区中没有此文件 这个文件不被git管理
- 用暂存区中的文件覆盖工作目录中的文件
    + git checkout -- 文件列表
    + 说明：暂存区和工作目录都有此文件 这个文件依然被git管理
- 回滚到本地仓库中的特定版本并覆盖暂存区和工作目录
    + git reset --hard commitID
- 查看分支
    + git branch
- 创建分支
    + git branch 分支名称
- 切换分支
    + git checkout 分支名称
- 创建并切换分支
    + git checkout -b 分支名称 
- 删除分支(如果分支没有被合并不允许删除)
    + git branch -d 分支名称
- 删除分支(强制删除分支)
    + git branch -D 分支名称
- 合并分支
    + git merge 来源分支
- 初始化一个裸露仓库(公共代码仓库)
    + git init --bare 
- 向远程仓库推送代码
    + git push 远程仓库地址 本地分支名称:远程分支名称
- 从远程仓库中拉取代码(拉取最新版本到本地 开发过程中使用)
    + git pull 远程仓库地址 远程分支名称:本地分支名称
- 为远程仓库地址创建别名
    + git remote add 别名 远程仓库地址
- 查看远程地址的详情信息
    + git remote -v
- 查看当前别名所对应的远程仓库地址
    + git remote show 别名 
- 删除当前别名及所对应的远程仓库地址
    + git remote remove 别名 
- 从远程仓库获取代码(拉取所有版本到本地)
    + git clone 远程仓库地址 项目名称
    + 使用场景：加入到已有项目的开发中 需要先拉取所有版本到本地 再进行开发
- 冲突修复
    + 模拟冲突
        * 张三和李四分别克隆代码到本地
        * 张三改了demo文件并提交到远端仓库
        * 李四也改了同一个文件
        * 这时因为张三已经提交了一版代码到远程仓库
        * 远程仓库的代码要比李四本地的代码新
        * 所以李四不能直接向远程仓库推送代码
        * 要先拉去再推送
        * 此时因为张三和李四改了同一个文件所以产生了冲突
        * 李四解决冲突并再次提交代码到远程仓库
- 多人协作开发免登录操作
    + ssh-keygen

### git使用流程
- 1.配置账户信息
    + git config --global user.name 用户名
    + git config --global user.email 邮箱地址
    + git config --list 查看当前的git配置
- 2.初始化本地仓库
    + git init
- 3.查看本地仓库的状态
    + git status
- 4.将工作目录中的文件提交到暂存区
    + git add 文件列表
    + git add . 添加工作目录中所有的文件到暂存区
- 5. 将暂存区中的代码提交到本地仓库
    + git commit -m 备注
    + git commit -m "first commit"

### git 忽略清单
- .gitignore文件
