$ErrorActionPreference = "Stop"

$destination = Join-Path $PSScriptRoot "..\public\images\companies"
New-Item -ItemType Directory -Force -Path $destination | Out-Null

$files = @(
    @{
        Name = "ekco.png"
        Url = "https://framerusercontent.com/images/Od0S1bgqJ6tGWWSQeCZ3h6FYs.png?width=469&height=138"
    },
    @{
        Name = "ccl-design.png"
        Url = "https://framerusercontent.com/images/G8vMp2TA3FVOXoKL4O5IlYDoms.png?width=1022&height=575"
    },
    @{
        Name = "contact-advantage.png"
        Url = "https://framerusercontent.com/images/Go5UTUKsRoS97shptdVhcrYIGpY.png?width=640&height=220"
    },
    @{
        Name = "ccl-components.png"
        Url = "https://framerusercontent.com/images/Mgb6CAVOjOqfloxsnKp6knvaYGI.png?width=244&height=113"
    }
)

foreach ($file in $files) {
    $output = Join-Path $destination $file.Name
    Write-Host "Downloading $($file.Name)..."
    Invoke-WebRequest -Uri $file.Url -OutFile $output
}

Write-Host ""
Write-Host "Done. Logos saved to:"
Write-Host $destination
