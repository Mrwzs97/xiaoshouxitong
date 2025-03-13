# 配置参数
$repoPath = "D:\智能销售系统\Git"
$commitMessage = "自动同步_" + (Get-Date -Format "yyyyMMdd_HHmmss")

# 执行操作
Set-Location $repoPath
git add .
git commit -m $commitMessage
git push origin main

# 结果检查
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ 推送成功！访问地址：https://mrwzs97.github.io/xiaoshouxitong/" -ForegroundColor Green
} else {
    Write-Host "❌ 推送失败，请检查错误信息" -ForegroundColor Red
}