// @ts-ignore
/* eslint-disable */
import request from '@/lib/request';

/** 修改宠物信息 PUT /pet */
export async function putPet(body: {}, options?: { [key: string]: any }) {
  return request<{ code: number; data: API.Pet }>('/pet', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新建宠物信息 POST /pet */
export async function postPet(
  body: {
    /** 宠物名 */
    name: string;
    /** 宠物销售状态 */
    status: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<{ code: number; data: API.Pet }>('/pet', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 查询宠物详情 GET /pet/${param0} */
export async function getPetId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPetIdParams,
  options?: { [key: string]: any },
) {
  const { petId: param0, ...queryParams } = params;
  return request<{ code: number; data: API.Pet }>(`/pet/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除宠物信息 DELETE /pet/${param0} */
export async function deletePetId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePetIdParams,
  options?: { [key: string]: any },
) {
  const { petId: param0, ...queryParams } = params;
  return request<{ code: number }>(`/pet/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据状态查找宠物列表 GET /pet/findByStatus */
export async function getFindByStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFindByStatusParams,
  options?: { [key: string]: any },
) {
  return request<API.Pet[]>('/pet/findByStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
