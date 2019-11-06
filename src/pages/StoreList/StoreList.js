
import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";
import StoreInformation from 'Components/StoreInformation'
import './StoreList.scss'
import StoreCategories from 'Components/StoreCategories'
import Magnifier from 'Images/magnifier.png'
import axios from 'axios';


class StoreList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                }, {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                }, {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                }, {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                }, {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                }, {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                }, {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                }, {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                }, {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                }, {
                    "additional_discount": 0,
                    "address": "서울 용산구 청파동3가 29 지하1층",
                    "city": "서울",
                    "company_name": "청결푸드",
                    "company_number": "629-18-01047",
                    "delivery_fee": "2000.00",
                    "delivery_fee_explanation": "배달 요금 2000원, 최소 주문 금액 14000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 194,
                    "ingredients_origin": "",
                    "is_available_pickup": false,
                    "lat": "37.544276433885",
                    "lng": "126.969694388609",
                    "logo_url": "/media/franchise_logos/떡깨비_20181101_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "떡깨비-청파점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 02:00",
                    "phone": "050718627204",
                    "phone_order": true,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [],
                    "threshold": "9000.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로2가 93-4 1층",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "858-28-00500",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "40~50분",
                    "free_delivery_threshold": "0.00",
                    "id": 203,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.531905419586",
                    "lng": "126.970816711051",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-신용산점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 13,
                    "review_image_count": 5,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                },
                {
                    "additional_discount": 0,
                    "address": "서울 용산구 한강로1가 231-6",
                    "city": "서울",
                    "company_name": "(주)비지에프리테일",
                    "company_number": "809-08-01154",
                    "delivery_fee": "3000.00",
                    "delivery_fee_explanation": "배달 요금 3000원, 최소 주문 금액 10000원",
                    "estimated_delivery_time": "45~55분",
                    "free_delivery_threshold": "0.00",
                    "id": 208,
                    "ingredients_origin": "*비어하우스소시지[국내제조]\r\n*핫도그번스[국내제조]\r\n*케찹[국내제조]\r\n*피자페파로니(봉지)[국내제조]\r\n*엔젤헤어MC55[국내제조]\r\n*핫도그미트칠리소스-T[국내제조]\r\n*냉동청피망[중국]\r\n*리치스 슬라이스 블랙올리브[스페인]\r\n*효모추출물(H-GL)[태국산]\r\n*버텍스아이지[태국산]\r\n",
                    "is_available_pickup": false,
                    "lat": "37.532894677447",
                    "lng": "126.973405918741",
                    "logo_url": "/media/franchise_logos/CU_20190322_Franchise이미지약정서_crop_200x200.jpg",
                    "name": "CU-용산삼각지점",
                    "one_dish": false,
                    "open_time_description": "11:00 - 23:00",
                    "phone": "0000000000",
                    "phone_order": false,
                    "review_avg": "5.0",
                    "review_count": 1,
                    "review_image_count": 0,
                    "tags": [
                        "relayo"
                    ],
                    "threshold": "7500.00"
                }
            ],
            categories: [
                {
                    id: 1,
                    name: "1인분주문"
                },
                {
                    id: 2,
                    name: "프랜차이즈"
                },
                {
                    id: 3,
                    name: "치킨"
                },
                {
                    id: 4,
                    name: "피자양식"
                },
                {
                    id: 5,
                    name: "중식"
                },
                {
                    id: 6,
                    name: "한식"
                },
                {
                    id: 7,
                    name: "일식돈까스"
                },
                {
                    id: 8,
                    name: "족발보쌈"
                },
                {
                    id: 9,
                    name: "야식"
                },
                {
                    id: 10,
                    name: "분식"
                },
                {
                    id: 11,
                    name: "카페디저트"
                },
                {
                    id: 12,
                    name: "편의점"
                }
            ],

            additionalRenderNum: 1,
            job: []
        }
        // this.scrollHandler = this.scrollHandler.bind(this)
    }

    handleRender = () => {
        const { categoryId } = this.props.match.params;
        axios(`http://10.58.2.209:8000/restaurant/category/${categoryId}?order_method=review_avg`)
            .then(res => {
                console.log(res)
                this.setState({
                    restaurants: res.data.restaurants
                })
            })
    }
    scrollHandler = () => {
        console.log("hiasdf")
        let y = 923;
        console.log("value of Y ===", y)
        let a = window.scrollY;
        if (a && a > y) {
            y = y + 1300;
            console.log("new Y===", y)
            this.setState({
                additionalRenderNum: this.state.additionalRenderNum + 1
            })
        }

        axios(`http://10.58.4.168:8000/job/recruitment/${this.state.additionalRenderNum}`)
            .then(res => {
                console.log("new axios===", res)
                console.log(res.data.job.position)
                const { job } = this.state;
                this.setState({
                    // restaurants: res.data.restaurants
                    job: res.data.job
                })
            })
        console.log("is scrollHandler working?===", this.state.additionalRenderNum)

    }

    componentDidMount() {
        // const { categoryId } = this.props.match.params;
        // axios(`http://10.58.2.209:8000/restaurant/category/${categoryId}?order_method=review_avg&page=${this.state.additionalRenderNum}`)
        // .then(res => res.json())

        // .then(res => {
        //     console.log("new axios===", res)
        //     this.setState({
        //         restaurants: res.data.restaurants
        //     })
        // })

        let position = 0
        window.addEventListener("scroll", () => {
            console.log("test", window.scrollY)
            if (window.scrollY > 923 + position) {
                position = window.scrollY
                return this.scrollHandler(window.scrollY)
            }
        }
        )
    }

    render() {
        console.log("param===", this.props.match)
        console.log("2222====", this.state)
        return (
            <>
                <div>
                    {this.state.job.position}
                </div>
                <div className="store-list__category">
                    <div>
                        {/* <img className = "magnifier" src={Magnifier}>
                    </img> */}
                        <label id="9">
                            <img className="magnifier" src={Magnifier} id="9">
                            </img>
                        </label>
                    </div>
                    {this.state.categories.map(data => (
                        <StoreCategories click={this.handleRender} info={data} />
                    ))}
                </div>
                {this.state.restaurants &&

                    <div className="store-list">
                        {this.state.restaurants.map((info, index) => (
                            <StoreInformation key={index} data={info} />
                        ))}
                    </div>


                }
            </>

        )
    }
};
export default withRouter(StoreList);
