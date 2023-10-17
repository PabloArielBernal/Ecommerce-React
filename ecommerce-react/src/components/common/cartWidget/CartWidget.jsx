import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={0} showZero color="primary">
      <ShoppingCartIcon color="primary" />
    </Badge>
    </div>
  );
};
