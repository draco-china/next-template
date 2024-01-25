declare namespace API {
  type Category = {
    /** 分类ID编号 */
    id?: string;
    /** 分类名称 */
    name?: string;
  };

  type deletePetIdParams = {
    /** Pet id to delete */
    petId: string;
  };

  type getFindByStatusParams = {
    /** Status values that need to be considered for filter */
    status: string;
  };

  type getPetIdParams = {
    /** 宠物 ID */
    petId: string;
  };

  type Pet = {
    /** 宠物ID编号 */
    id: string;
    /** 分类 */
    category: Category;
    /** 名称 */
    name: string;
    /** 照片URL */
    photoUrls: string[];
    /** 标签 */
    tags: Tag[];
    /** 宠物销售状态 */
    status: 'available' | 'pending' | 'sold';
  };

  type Tag = {
    /** 标签ID编号 */
    id?: string;
    /** 标签名称 */
    name?: string;
  };
}
