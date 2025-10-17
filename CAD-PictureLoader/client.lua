local isShowing = false

RegisterNUICallback("closeImage", function(_, cb)
    SetNuiFocus(false, false)
    SendNUIMessage({ type = 'hide' })
    isShowing = false
    cb({})
end)

local function showImage(url)
    if not isShowing then
        isShowing = true
        SetNuiFocus(true, true)
        SendNUIMessage({
            type = "show",
            url = url
        })
    end
end

exports("ShowImage", showImage)

RegisterCommand("showpic", function(_, args)
    local link = args[1]
    if not link then
        print("Usage: /showpic [image_url]")
        return
    end
    showImage(link)
end)
