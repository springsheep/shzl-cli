/*
 * @Author: your name
 * @Date: 2021-03-04 10:48:48
 * @LastEditTime: 2021-03-04 10:49:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /sgup-web-front/build/version.js
 */
/* eslint-disable max-len */
const execSync = require('child_process').execSync; // 同步子进程
const fs = require('fs');

const versionPath = 'version.txt'; // version路径
const buildPath = 'dist'; // 打包的路径
const autoPush = false; // 写入版本信息之后是否自动提交git上
const commitHash = execSync('git show -s --format=%H').toString().trim(); // 最后提交的版本hash
const gitRemteAddress = execSync('git remote -v').toString().split('\n')[0].split('\t')[1];
let versionStr = ''; // 版本信息字符串

// 如果versionPath存在，将先读取里边的版本信息
if (fs.existsSync(versionPath)) {
    versionStr = fs.readFileSync(versionPath).toString() + '\n';
}

if (versionStr.indexOf(commitHash) !== -1) {
    console.warn('\x1B[33m%s\x1b[0m', 'warming: 当前的git版本数据已经存在了!\n');
} else {
    // git 最后一次提交的 HEAD
    const commitUserName = execSync('git show -s --format=%cn').toString().trim();
    const commitUserEmail = execSync('git show -s --format=%ce').toString().trim();
    const commitMessage = execSync('git show -s --format=%s').toString().trim();
    const branch = execSync('git name-rev --name-only HEAD').toString().trim();
    const commitDateObj = new Date(execSync('git show -s --format=%cd').toString());
    const commitDate = `${commitDateObj.getFullYear() + '-' + (commitDateObj.getMonth() + 1) + '-' + commitDateObj.getDate() + ' ' + commitDateObj.getHours() + ':' + commitDateObj.getMinutes()}`;
    const buildUserName = execSync('git config user.name').toString().trim();
    const buildUserEmail = execSync('git config user.email').toString().trim();
    const nowDate = new Date();
    const buildDate = `${nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate() + ' ' + nowDate.getHours() + ':' + nowDate.getMinutes()}`;
    versionStr = `
    commitHash: ${commitHash}
    commitUserName: ${commitUserName}
    commitUserEmail: ${commitUserEmail}
    commitMessage: ${commitMessage}
    commitDate: ${commitDate}
    gitRemoteAddress: ${gitRemteAddress}
    buildUserName: ${buildUserName}
    buildUserEmail: ${buildUserEmail}
    buildBranch: ${branch}
    buildDate: ${buildDate}
    \n${new Array(80).join('*')}
    `;

    fs.writeFileSync(versionPath, versionStr, {
        flag: 'a'
    });
    // 写入版本信息之后，自动将版本信息提交到当前分支的git上
    if (autoPush) {
        execSync(`git add ${versionPath}`);
        execSync(`git commit ${versionPath} -m "docs: 自动提交程序包版本信息"`);
        execSync(`git push origin ${branch}`);
    }
}

// 将version文件移植到打包文件中
if (fs.existsSync(buildPath)) {
    fs.writeFileSync(`${buildPath}/${versionPath}`, fs.readFileSync(versionPath));
}

console.info('\x1B[32m%s\x1b[0m', [
    ' ::::::::  :::    :::  ::::::::   ::::::::  :::::::::: ::::::::   ::::::::  ',
    ':+:    :+: :+:    :+: :+:    :+: :+:    :+: :+:       :+:    :+: :+:    :+: ',
    '+:+        +:+    +:+ +:+        +:+        +:+       +:+        +:+        ',
    '+#++:++#++ +#+    +:+ +#+        +#+        +#++:++#  +#++:++#++ +#++:++#++ ',
    '       +#+ +#+    +#+ +#+        +#+        +#+              +#+        +#+ ',
    '#+#    #+# #+#    #+# #+#    #+# #+#    #+# #+#       #+#    #+# #+#    #+# ',
    ' ########   ########   ########   ########  ########## ########   ########  '
].join('\n'));
