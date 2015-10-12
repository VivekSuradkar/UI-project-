var RowModel = function (sId, sName, iWidth, iValue, bSelected) {

    this.getId = function () {
        return sId;
    },

        this.getName = function () {
            return sName;
        },

        this.getWidth = function () {
            return iWidth;
        },

        this.getValue = function () {
            return iValue;
        },
        this.isSelected = function () {
            return bSelected;
        }
};