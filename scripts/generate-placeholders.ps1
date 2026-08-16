Add-Type -AssemblyName System.Drawing

$outDir = "$PSScriptRoot\..\public\images"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function New-Placeholder {
    param(
        [string]$Path,
        [int]$Width,
        [int]$Height,
        [string]$Label,
        [string]$HexTop = "#2F5D3A",
        [string]$HexBottom = "#1B3B24"
    )

    $bmp = New-Object System.Drawing.Bitmap $Width, $Height
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    $colorTop = [System.Drawing.ColorTranslator]::FromHtml($HexTop)
    $colorBottom = [System.Drawing.ColorTranslator]::FromHtml($HexBottom)
    $rect = New-Object System.Drawing.Rectangle 0, 0, $Width, $Height
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, $colorTop, $colorBottom, 45
    $g.FillRectangle($brush, $rect)

    # Dimension label, small, top-left
    $dimFont = New-Object System.Drawing.Font("Segoe UI", [single]12.0, [System.Drawing.FontStyle]::Regular)
    $dimBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(160, 255, 255, 255))
    $g.DrawString("$Width x $Height", $dimFont, $dimBrush, 16, 16)

    # Main label, centered
    $fontSize = [single]([Math]::Max(18, [Math]::Min(36, [int]($Width / 22))))
    $font = New-Object System.Drawing.Font("Segoe UI", $fontSize, [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(235, 255, 255, 255))
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center
    $layoutRect = New-Object System.Drawing.RectangleF 20, 20, ($Width - 40), ($Height - 40)
    $g.DrawString($Label, $font, $textBrush, $layoutRect, $format)

    # Border
    $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(90, 255, 255, 255)), 3
    $g.DrawRectangle($pen, 1, 1, $Width - 3, $Height - 3)

    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $encParams = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 85L
    $bmp.Save($Path, $jpegCodec, $encParams)

    $g.Dispose()
    $bmp.Dispose()
    Write-Host "Created $Path"
}

# Hero
New-Placeholder -Path "$outDir\hero.jpg" -Width 1920 -Height 1080 -Label "HERO PHOTO`nPlaceholder - replace with real photo" -HexTop "#3B7A45" -HexBottom "#1B3B24"

# Services
New-Placeholder -Path "$outDir\service-landscape-design.jpg" -Width 800 -Height 600 -Label "Landscape Design`nPhoto Placeholder"
New-Placeholder -Path "$outDir\service-sod.jpg" -Width 800 -Height 600 -Label "Sod Installation`nPhoto Placeholder"
New-Placeholder -Path "$outDir\service-tree-removal.jpg" -Width 800 -Height 600 -Label "Tree Removal`nPhoto Placeholder"
New-Placeholder -Path "$outDir\service-lumber-mill.jpg" -Width 800 -Height 600 -Label "Lumber Mill`nPhoto Placeholder" -HexTop "#6B4F3B" -HexBottom "#3E2C20"
New-Placeholder -Path "$outDir\service-hardscapes.jpg" -Width 800 -Height 600 -Label "Hardscapes`nPhoto Placeholder" -HexTop "#6B4F3B" -HexBottom "#3E2C20"
New-Placeholder -Path "$outDir\service-lawn-mowing.jpg" -Width 800 -Height 600 -Label "Lawn Mowing`nPhoto Placeholder"

# Gallery
1..6 | ForEach-Object {
    New-Placeholder -Path "$outDir\gallery-$_.jpg" -Width 800 -Height 600 -Label "Gallery Photo $_`nPlaceholder"
}

# Team
New-Placeholder -Path "$outDir\team.jpg" -Width 1200 -Height 800 -Label "Team Photo`nPlaceholder - replace with real photo" -HexTop "#4A4A4A" -HexBottom "#232323"

Write-Host "Done."
