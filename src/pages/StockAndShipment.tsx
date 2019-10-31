/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
  Grid,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import { GridSize } from '@material-ui/core/Grid';

export type MenuItemOption = {
  text: string;
  value: string | number;
};
export type FormControlType = 'input' | 'autoComplete' | 'select';
export type MaterialSpecificationProps = 'length' | 'width' | 'height' | 'weight' | 'materialCost';
export interface StockAndShipment {
  onChange: (item: MenuItemOption, type: FormControlType, key?: MaterialSpecificationProps) => void;
  onSubmit: () => void;
  formData: {
    // 材料类型 1
    type: number | string;
    // 材料类型 2
    materialType: number | string | null;
    materialTypeError: boolean;
    materialTypeMessage: string;
    // 材料单价
    materialCost: number | string;
    materialCostError: boolean;
    materialCostMessage: string;
    // 长宽高重
    length: number | string;
    lengthError: boolean;
    lengthMessage: string;
    width: number | string;
    widthError: boolean;
    widthMessage: string;
    height: number | string;
    heightError: boolean;
    heightMessage: string;
    weight: number | string;
    weightError: boolean;
    weightMessage: string;
    // 预估重量
    predictWeight: number;
  };
  formOptions: {
    materialType: MenuItemOption[];
    type: MenuItemOption[];
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    root: {
      flexGrow: 1,
    },
    formControl: {
      margin: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const StockAndShipment = ({ onSubmit, formData, formOptions, onChange }: StockAndShipment) => {
  const classes = useStyles();

  const handleAutocompleteChange = (
    _: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    item: MenuItemOption,
  ) => {
    onChange(item, 'autoComplete');
  };

  const handleSelectChange = (
    _: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactElement,
  ) => {
    const { children, value } = child.props;
    onChange(
      {
        text: children,
        value,
      },
      'select',
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: MaterialSpecificationProps,
  ) => {
    onChange({ text: e.target.value, value: e.target.value }, 'input', key);
  };

  const renderSpecification = () => {
    const getLengthItem = (xs: GridSize) => (
      <Grid item xs={xs} key="length">
        <FormControl required className={classes.formControl} error={formData.lengthError}>
          <InputLabel>长</InputLabel>
          <Input
            value={formData.length}
            type="number"
            onChange={e => handleInputChange(e, 'length')}
            endAdornment={<InputAdornment position="end">mm</InputAdornment>}
          />
          <FormHelperText>{formData.lengthMessage}</FormHelperText>
        </FormControl>
      </Grid>
    );
    const getWidthItem = (xs: GridSize) => (
      <Grid item xs={xs} key="width">
        <FormControl required className={classes.formControl} error={formData.widthError}>
          <InputLabel>宽</InputLabel>
          <Input
            value={formData.width}
            type="number"
            onChange={e => handleInputChange(e, 'width')}
            endAdornment={<InputAdornment position="end">mm</InputAdornment>}
          />
          <FormHelperText>{formData.widthMessage}</FormHelperText>
        </FormControl>
      </Grid>
    );
    const getHeightItem = (xs: GridSize) => (
      <Grid item xs={xs} key="height">
        <FormControl required className={classes.formControl} error={formData.heightError}>
          <InputLabel>高</InputLabel>
          <Input
            value={formData.height}
            type="number"
            onChange={e => handleInputChange(e, 'height')}
            endAdornment={<InputAdornment position="end">mm</InputAdornment>}
          />
          <FormHelperText>{formData.heightMessage}</FormHelperText>
        </FormControl>
      </Grid>
    );

    switch (formData.type) {
      case 0:
        return (
          <>
            {getLengthItem(6)}
            {getHeightItem(6)}
          </>
        );
      case 1:
        return (
          <>
            {getLengthItem(4)}
            {getWidthItem(4)}
            {getHeightItem(4)}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            入库
          </Typography>
        </Toolbar>
      </AppBar>
      <FormControl required fullWidth className={classes.formControl}>
        <InputLabel>材料类型 1</InputLabel>
        <Select value={formData.type} onChange={handleSelectChange}>
          {formOptions.type.map(({ text, value }) => (
            <MenuItem value={value} key={text + '-' + value}>
              {text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {renderSpecification()}

      <Grid item xs={6} key="weight">
        <FormControl required className={classes.formControl} error={formData.weightError}>
          <InputLabel>实际重量</InputLabel>
          <Input
            value={formData.weight}
            onChange={e => handleInputChange(e, 'weight')}
            type="number"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          />
          <FormHelperText>{formData.weightMessage}</FormHelperText>
        </FormControl>
      </Grid>

      <Grid item xs={6} key="pre-weight">
        <FormControl className={classes.formControl}>
          <InputLabel>预估重量</InputLabel>
          <Input
            value={formData.predictWeight}
            readOnly
            type="number"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          />
          <FormHelperText>计算公式：体积 x 密度</FormHelperText>
        </FormControl>
      </Grid>

      <FormControl fullWidth error={formData.materialTypeError} className={classes.formControl}>
        <Autocomplete
          options={formOptions.materialType}
          getOptionLabel={(option: MenuItemOption) => option.text}
          value={formData.materialType}
          onChange={handleAutocompleteChange}
          id="material-type"
          aria-controls="material-type"
          renderInput={(params: any) => (
            <TextField
              {...params}
              margin="normal"
              required
              label="材料类型 2"
              fullWidth
              error={formData.materialTypeError}
            />
          )}
        />
        <FormHelperText>{formData.materialTypeMessage}</FormHelperText>
      </FormControl>

      <Grid item xs={6}>
        <FormControl required fullWidth error={formData.materialCostError} className={classes.formControl}>
          <InputLabel>单价</InputLabel>
          <Input
            onChange={e => handleInputChange(e, 'materialCost')}
            value={formData.materialCost}
            type="number"
            endAdornment={<InputAdornment position="end">元/kg</InputAdornment>}
          />
          <FormHelperText>{formData.materialCostMessage}</FormHelperText>
        </FormControl>
      </Grid>

      <FormControl fullWidth className={classes.formControl}>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          提交
        </Button>
      </FormControl>
    </div>
  );
};

export default StockAndShipment;
