const CategoryMenu = {
  info: [
    {
      title: "전체보기",
      imageUrl:
        "data:image/png;base64,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"
    },
    {
      title: "1인분 주문",
      imageUrl:
        "/static/media/category-onedish.4ad65127.png"
    },
    {
      title: "프랜차이즈",
      imageUrl:
        "/static/media/category-10.3d2dbd12.png"
    },
    {
      title: "치킨",
      imageUrl:
        "/static/media/category-02.5b59a615.png"
    },
    {
      title: "피자/양식",
      imageUrl:
        "/static/media/category-03.fd8eb6cd.png"
    },
    {
      title: "중국집",
      imageUrl:
        "/static/media/category-04.470cdb22.png"
    },
    {
      title: "한식",
      imageUrl:
        "/static/media/category-05.938b40c1.png"
    },
    {
      title: "일식/돈까스",
      imageUrl:
        "/static/media/category-06.9cb1b633.png"
    },
    {
      title: "족발/보쌈",
      imageUrl:
        "/static/media/category-07.ebe7f567.png"
    },
    {
      title: "야식",
      imageUrl:
        "/static/media/category-08.d5a22ed0.png"
    },
    {
      title: "분식",
      imageUrl:
        "/static/media/category-09.84a622a1.png"
    },
    {
      title: "카페/디저트",
      imageUrl:
        "/static/media/category-11.1789f12b.png"
    },
    {
      title: "편의점",
      imageUrl:
        "/static/media/category-09.f19c967b.png"
    },

  ]
}

export default CategoryMenu