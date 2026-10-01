$ErrorActionPreference = "Stop"

$destination = Join-Path $PSScriptRoot "..\public\images\visual-showcase"

$files = @(
    @{ RelativePath = "graphic-design/graphic-01.png"; Url = "https://framerusercontent.com/images/NhogUAuTEtLdVtezMA4gGB8q1UQ.png" },
    @{ RelativePath = "graphic-design/graphic-02.png"; Url = "https://framerusercontent.com/images/w6ZGJDGS75lnEjehxe9IPRDyGsQ.png" },
    @{ RelativePath = "graphic-design/graphic-03.png"; Url = "https://framerusercontent.com/images/7ysz2H5FL5ivc3E2urQXqpPoIs8.png" },
    @{ RelativePath = "graphic-design/graphic-04.png"; Url = "https://framerusercontent.com/images/zE1y7CYAAyxqmoH8MQIA4ZloqLM.png" },
    @{ RelativePath = "graphic-design/graphic-05.png"; Url = "https://framerusercontent.com/images/MPEBPBc6Q7BgXpR2vd0X5As1k1s.png" },
    @{ RelativePath = "graphic-design/graphic-06.png"; Url = "https://framerusercontent.com/images/VbzrWK1FRZibi24wbximgNFsDDI.png" },
    @{ RelativePath = "graphic-design/graphic-07.png"; Url = "https://framerusercontent.com/images/FvdNbWkCHYmx3DrLy2SpsM1FJI8.png" },
    @{ RelativePath = "graphic-design/graphic-08.png"; Url = "https://framerusercontent.com/images/vgprV2rmZEnkG8dIbBQiGyzaU.png" },
    @{ RelativePath = "graphic-design/graphic-09.png"; Url = "https://framerusercontent.com/images/MdcP5vGr1fg5HWr7FUkJe5AkAMA.png" },
    @{ RelativePath = "graphic-design/graphic-10.png"; Url = "https://framerusercontent.com/images/hrExacctGvfpMlZyW5MtAf9Km1s.png" },
    @{ RelativePath = "3d-graphics/3d-01.png"; Url = "https://framerusercontent.com/images/D9KSDmCbQXutJVCJThVbCLuB4H0.png" },
    @{ RelativePath = "3d-graphics/3d-02.png"; Url = "https://framerusercontent.com/images/0RXnEyh9pxp58OTAm5MOhWBPl8.png" },
    @{ RelativePath = "3d-graphics/3d-03.png"; Url = "https://framerusercontent.com/images/KIHU0qEPA0mOH1sWfetKcTHfEJE.png" }
)

foreach ($file in $files) {
    $output = Join-Path $destination $file.RelativePath
    $folder = Split-Path -Parent $output

    New-Item -ItemType Directory -Force -Path $folder | Out-Null

    Write-Host "Downloading $($file.RelativePath)..."
    Invoke-WebRequest -Uri $file.Url -OutFile $output
}

Write-Host ""
Write-Host "Done. Showcase images saved to:"
Write-Host $destination
