$ErrorActionPreference = "Stop"

# Run this from the root of the Next.js portfolio project:
# powershell -ExecutionPolicy Bypass -File .\scripts\download-framer-project-assets.ps1

$projectRoot = (Get-Location).Path

function Download-PortfolioAsset {
    param(
        [Parameter(Mandatory = $true)][string]$Url,
        [Parameter(Mandatory = $true)][string]$FallbackUrl,
        [Parameter(Mandatory = $true)][string]$RelativePath
    )

    $destination = Join-Path $projectRoot $RelativePath
    $directory = Split-Path $destination -Parent

    New-Item -ItemType Directory -Force -Path $directory | Out-Null

    Write-Host "Downloading $RelativePath"

    try {
        Invoke-WebRequest -Uri $Url -OutFile $destination -UseBasicParsing
    }
    catch {
        Write-Warning "Original asset URL failed. Trying the Framer resized URL..."
        Invoke-WebRequest -Uri $FallbackUrl -OutFile $destination -UseBasicParsing
    }
}

$assets = @(
    @{
        Url = "https://framerusercontent.com/images/JCINa3WUO2HWcZZsrjdE9uzGJAE.png"
        FallbackUrl = "https://framerusercontent.com/images/JCINa3WUO2HWcZZsrjdE9uzGJAE.png?height=524&width=496"
        RelativePath = "public\images\projects\ccl-design-website\cover.png"
    },
    @{
        Url = "https://framerusercontent.com/images/mqDB8UMe3NHVURi43xctF8iO9E.png"
        FallbackUrl = "https://framerusercontent.com/images/mqDB8UMe3NHVURi43xctF8iO9E.png?height=524&width=496"
        RelativePath = "public\images\projects\web-portal\cover.png"
    },
    @{
        Url = "https://framerusercontent.com/images/cY3eyEogK8keR3P4EOaOrLaA.jpg"
        FallbackUrl = "https://framerusercontent.com/images/cY3eyEogK8keR3P4EOaOrLaA.jpg?height=773&width=1382"
        RelativePath = "public\images\projects\t-shirt-designs\cover.jpg"
    },
    @{
        Url = "https://framerusercontent.com/images/SHjh4gjNKFTpxjmAeDzQ70WEA.jpg"
        FallbackUrl = "https://framerusercontent.com/images/SHjh4gjNKFTpxjmAeDzQ70WEA.jpg?height=229&width=601"
        RelativePath = "public\images\projects\t-shirt-designs\spreadshirt-sales.jpg"
    },
    @{
        Url = "https://framerusercontent.com/images/R6Nq0IzMl3ZmOwwI9wh8V1fsBA.jpg"
        FallbackUrl = "https://framerusercontent.com/images/R6Nq0IzMl3ZmOwwI9wh8V1fsBA.jpg?height=900&width=1425"
        RelativePath = "public\images\projects\t-shirt-designs\spreadshirt-best-sellers.jpg"
    },
    @{
        Url = "https://framerusercontent.com/images/WZcVuP4kVuqMRaITKaq6D6DoVk.jpg"
        FallbackUrl = "https://framerusercontent.com/images/WZcVuP4kVuqMRaITKaq6D6DoVk.jpg?height=690&width=1186"
        RelativePath = "public\images\projects\t-shirt-designs\redbubble-traffic.jpg"
    },
    @{
        Url = "https://framerusercontent.com/images/OiaBrldV2SPy9TQVtFuOlygEag.jpg"
        FallbackUrl = "https://framerusercontent.com/images/OiaBrldV2SPy9TQVtFuOlygEag.jpg?height=873&width=1199"
        RelativePath = "public\images\projects\t-shirt-designs\redbubble-sales.jpg"
    },
    @{
        Url = "https://framerusercontent.com/images/0kixfHTnxFivpN0Y25Jkf4jMII.png"
        FallbackUrl = "https://framerusercontent.com/images/0kixfHTnxFivpN0Y25Jkf4jMII.png?height=947&width=1292"
        RelativePath = "public\images\projects\b2b-landing-page\cover.png"
    },
    @{
        Url = "https://framerusercontent.com/images/Qx1Lr76lIphU3n8miU0nIVyDF8.png"
        FallbackUrl = "https://framerusercontent.com/images/Qx1Lr76lIphU3n8miU0nIVyDF8.png?height=832&width=1280"
        RelativePath = "public\images\projects\ecommerce-reactjs\cover.png"
    }
)

foreach ($asset in $assets) {
    Download-PortfolioAsset @asset
}

Write-Host ""
Write-Host "Finished. Downloaded $($assets.Count) Framer project images." -ForegroundColor Green
Write-Host "Images are under public\images\projects\."
