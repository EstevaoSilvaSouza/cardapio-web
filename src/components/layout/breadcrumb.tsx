import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { Link } from "react-router-dom";


type BreadType =  {
    items:any[] | null;
}

const BreadCrumb = ({items}:BreadType) => {
    return (
        <>
            {items && (
             <Breadcrumb w={'90%'} ml={10} color={'#EB2937'} fontWeight={'500'} separator='/' boxShadow={'0 4px 8px rgba(0, 0, 0, 0.1)'} p={8} my={4}>
                {items.map((e, index)  => (
                    <BreadcrumbItem key={index}>
                        <BreadcrumbLink  as={Link} to={`/${items[0]}/${e}`}>{e}</BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
                </Breadcrumb>
                )}</>)
}

export default BreadCrumb;
