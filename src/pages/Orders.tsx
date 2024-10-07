import useOrders from "@/hooks/useOrders";
import { Loading } from "@/components/feedback";
import { Heading } from "@/components/common";
import { ProductInfo } from "@/components/eCommerce";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Orders = () => {
  const {
    loading,
    error,
    orderList,
    showModal,
    selectedProduct,
    viewDetailsHandler,
    closeModalHandler,
  } = useOrders();

  console.log(selectedProduct, showModal, closeModalHandler);

  const totalPrices = orderList.reduce((acc, order) => acc + order.subtotal, 0);

  return (
    <>
      <Dialog open={showModal} onOpenChange={closeModalHandler}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Products Details</DialogTitle>
            <div className="h-4 border-b"></div>
            <DialogDescription>
              {selectedProduct.map((el) => (
                <ProductInfo
                  key={el._id}
                  title={el.title}
                  img={el.img}
                  price={el.price}
                  quantity={el.quantity}
                  direction="row"
                  style={{ marginBottom: "10px" }}
                />
              ))}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Heading title="My Order" />
      <Loading status={loading} error={error} type="table">
        <Table>
          <TableCaption>
            {orderList.length > 0
              ? "List of your orders"
              : "You have no orders yet"}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order Number</TableHead>
              <TableHead>Items</TableHead>
              <TableHead className="text-right">Total Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderList.map((order) => (
              <TableRow key={order._id}>
                <TableCell className="font-medium">{order._id}</TableCell>
                <TableCell>
                  {order.items.length} item{"(s) / "}
                  <span
                    onClick={() => viewDetailsHandler(order._id)}
                    role="button"
                    className="cursor-pointer hover:text-blue-500 hover:underline"
                  >
                    Product Details
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {order.subtotal.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">
                ${totalPrices.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Loading>
    </>
  );
};

export default Orders;
