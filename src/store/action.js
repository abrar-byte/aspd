// import dayjs from 'dayjs'
// import Serializer from '~/serializer'
// import api from '~/utils/api'

// export const fetchDraft =
//   ({ userId, activityId }: any) =>
//   (cb: any) => {
//     console.log('fetchDraft:', userId, activityId)
//     let url = ''
//     if (activityId) {
//       url = `/activities?filter[id][0]=${activityId}&include=tags`
//     }
//     if (userId) {
//       url = `/activities?filter[creator][0]=${userId}&include=tags`
//     }
//     api.get(url).then(async (result) => {
//       const data = Serializer.deserialize('activities', result.data)
//       if (data[0]) {
//         data[0].tags = data[0]?.tags.map((item: any) => {
//           return { label: item.name, value: item.id }
//         })
//         cb({ type: 'NA_SET_INFO', data: data[0] })
//       } else {
//         cb({ type: 'NA_CLEAR' })
//       }
//     })
//   }

// export const fetchMedia = (id: number) => (cb: any) => {
//   console.log('fetchMedia activity id:', id)
//   if (id) {
//     api.get(`/activities/${id}/media`).then((result) => {
//       const data = Serializer.deserialize('media', result.data)
//       cb({ type: 'NA_SET_IMAGES', data })
//     })
//   }
// }

// export const fetchSchedules = (id: number) => (cb: any) => {
//   console.log('fetchSchedules activity id:', id)
//   api
//     .get(
//       `/schedules?sort=start_at,id&filter[activity_id][0]=${id}&include=media`
//     )
//     .then((result) => {
//       const data = Serializer.deserialize('schedules', result.data)
//       cb({ type: 'NA_SET_SCHEDULES', data })
//     })
// }

// export const fetchCost = (id: number) => (cb: any) => {
//   console.log('fetchCost activity id:', id)
//   if (id) {
//     api.get(`/costs?filter[activity_id][0]=${id}`).then(async (result) => {
//       const data = Serializer.deserialize('costs', result.data)
//       cb({ type: 'NA_SET_COST', data: data })
//     })
//   }
// }

// export const fetchUserDetail = (user: any) => async (cb: any) => {
//   const res = await api.get(
//     `/users/${user.id}?include=activities,participating,wishlists,followers,following,avatar`
//   )
//   const { participating } = res.data.data.attributes
//   const { activities, wishlists, followers, following } =
//     res.data.data.relationships
//   const idAct = activities.data.map((v: any) => v?.id)
//   const idWish = wishlists.data.map((v: any) => v?.id)
//   const idFollowers = followers.data.map((v: any) => v?.id)
//   const idFollowing = following.data.map((v: any) => v?.id)
//   cb({
//     type: 'USER_SET_ALL',
//     activities: idAct,
//     participating: participating,
//     wishlists: idWish,
//     followers: idFollowers,
//     following: idFollowing
//   })
// }
