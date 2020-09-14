export class Globals {
    static getParentHeightWidth() {
        var height = window.innerHeight;
        var width = window.innerWidth;
        if (height < 550) {
            height = 550;
        }
        if (width < 350) {
            width = 350;
        }

        return {
            maxHeight: height,
            maxWidth: width,
            height: height,
            width: width
        }
    }

    static getContainerHeightWidth(num) {
        var height = window.innerHeight;
        var width = window.innerWidth;
        if (height < 550) {
            height = 550;
        }
        if (width < 350) {
            width = 350;
        }

        return {
            maxHeight: height * num / 100,
            maxWidth: width,
            height: height * num / 100,
            width: width,
        }
    }
}

export class Constants {
    static  local_json = "local_json"
}