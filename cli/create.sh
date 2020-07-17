#!/bin/bash

template="./template/"
targetFilder="./src/features"

echo "请输入新建项目名称: "

read name

if [ -z $name ]
then
  echo "项目名称不能为空"
else
  targetPath="$targetFilder/$name"
  if [ -d $targetPath ]
  then
    echo "项目已经存在"
  else
    cp -iR $template $targetPath
    echo "创建完成!"
  fi
fi