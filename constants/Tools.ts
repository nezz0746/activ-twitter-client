export default class Tools {
  static borderMaker(color, width, type = 'solid') {
    return {
      borderWidth: width,
      borderColor: color,
    };
  }

  static bowShadow() {
    return {
      shadowColor: 'grey',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 10,
      elevation: 6,
    };
  }
}
