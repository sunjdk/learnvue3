1.将本地的home分支进行本地的commit提交:

```java
git add .
git commit -m "xxxxxxxx"
```

2.将本地的home分支推送到远程仓库进行保存:

```java
git push -u origin home
```

3.将本地的home分支合并到本地的master分支:

```java
git checkout master
git merge home
```
4.删除本地的home分支:

```java
git branch -d home
```
