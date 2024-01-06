import { Center, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BaseApi } from "../../../context/BaseApi";
import { useParams } from "react-router-dom";

interface IProduct {
    Id: string;
    Name: string;
    Description: string;
    Quantity: number;
    Tag: string;
    Type: string;
    Value: number;
    Id_Store: number;
    Id_Order: number;
    Id_ProduRef: number;
    createdAt: string;
    updatedAt: string;
  }
  
  interface IOrder {
    Id: number;
    NameCart: string;
    Status: boolean;
    createdAt: string;
    updatedAt: string;
    Id_Table: number;
    orderProducts: IProduct[];
  }
  
  interface IApiResponse {
    message: string;
    Pedido: IOrder;
  }


const OrderDetails = () => {

    const {Id} = useParams();
    const [order,SetOrder] = useState<IApiResponse | null>(null);

    const loadOrder = async () => {
        const {data} = await BaseApi.post('/cart/store/findOrder',{Id})
        if(data){
            SetOrder(data);
        }
    }
    useEffect(() => {
        loadOrder();
    },[])

    return (
        <Center>
            {order ? (
                <>
                 <Heading>Pedido : {order.Pedido.Id}</Heading>
                 <Heading>Status : {order.Pedido.Status}</Heading>
                
                 <h3>Itens do Pedido</h3>
                <Center>
                    {order.Pedido.orderProducts.map((h) => (
                        <>
                            <h4>{h.Name}</h4>
                            <h4>{h.Value}</h4>
                            <h4>{h.Quantity}</h4>
                        </>
                    ))}    
                </Center>
               
                </>
            ) 
            : (
                <><h1>Buscando Pedido....</h1></>
            )}
            
        </Center>
    )
}

export default OrderDetails;