import {
  Box,
  TextField,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from '@mui/material';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Survey = () => {
  const [surveyData, setSurveyData] = useState({
    surname: '',
    name: '',
    patronymic: '',
    email: '',
    bankName: '',
    bic: '',
    bankAccount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSave = () => {
    Cookies.set('surveyData', JSON.stringify(surveyData));
    navigate('/contract');
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <Box sx={{ p: 4 }}>
          <Typography variant='h4' gutterBottom>
            Типовая форма анкеты физического лица
          </Typography>

          <Typography variant='h6' gutterBottom>
            Вид анкеты (нужное подчеркнуть)
          </Typography>
          <FormControl required component='fieldset' sx={{ mb: 3 }}>
            {' '}
            <RadioGroup row>
              <FormControlLabel value='primary' control={<Radio />} label='Первичная анкета' />
              <FormControlLabel value='updated' control={<Radio />} label='Обновленная анкета' />
            </RadioGroup>
          </FormControl>

          <Typography variant='h5' gutterBottom>
            1. Идентификационные сведения
          </Typography>

          <FormControl required component='fieldset' sx={{ mb: 3 }}>
            <Typography variant='body1' gutterBottom>
              Статус (нужное подчеркнуть)
            </Typography>
            <RadioGroup row>
              <FormControlLabel value='resident' control={<Radio />} label='Резидент' />
              <FormControlLabel value='nonresident' control={<Radio />} label='Нерезидент' />
            </RadioGroup>
          </FormControl>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              name='surname'
              required
              label='Фамилия'
              variant='outlined'
              value={surveyData.surname}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              name='name'
              required
              label='Имя'
              variant='outlined'
              value={surveyData.name}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              name='patronymic'
              label='Отчество (при наличии)'
              variant='outlined'
              value={surveyData.patronymic}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Дата рождения'
              type='date'
              InputLabelProps={{ shrink: true }}
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Место рождения (при наличии в документе)'
              variant='outlined'
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Национальность (при наличии в документе)'
              variant='outlined'
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth required>
              <InputLabel>Пол</InputLabel>
              <Select>
                <MenuItem value='male'>Мужской</MenuItem>
                <MenuItem value='female'>Женский</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='Гражданство' variant='outlined' required />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Семейное положение (при наличии в документе)'
              variant='outlined'
            />
          </Box>

          <Typography variant='h6' gutterBottom sx={{ mt: 4 }}>
            Реквизиты документа, удостоверяющего личность:
          </Typography>

          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='Наименование документа' variant='outlined' required />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='Серия и номер документа' variant='outlined' required />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Дата выдачи документа'
              type='date'
              InputLabelProps={{ shrink: true }}
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Дата окончания срока действия документа'
              type='date'
              InputLabelProps={{ shrink: true }}
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Наименование органа, выдавшего документ'
              variant='outlined'
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='Код подразделения (если имеется)' variant='outlined' />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Персональный идентификационный номер'
              variant='outlined'
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Адрес регистрации (при наличии в документе)'
              variant='outlined'
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Адрес места фактического проживания или пребывания (при наличии в документе)'
              variant='outlined'
            />
          </Box>

          <Typography variant='h6' gutterBottom sx={{ mt: 4 }}>
            Контактные данные:
          </Typography>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Номера телефонов (домашний, рабочий и мобильный)'
              variant='outlined'
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='Номер факса (при наличии)' variant='outlined' />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              name='email'
              label='Адрес электронной почты (при наличии)'
              variant='outlined'
              value={surveyData.email}
              onChange={handleChange}
            />
          </Box>

          <Typography variant='h5' gutterBottom sx={{ mt: 4 }}>
            1.1. Заполняется только для иностранных граждан и лиц без гражданства
          </Typography>

          <Typography variant='h6' gutterBottom>
            Реквизиты документа, подтверждающего право иностранного гражданина или лица без
            гражданства на пребывание (проживание) в Кыргызской Республике:
          </Typography>
          <FormControl component='fieldset' sx={{ mb: 3 }} required>
            <RadioGroup row>
              <FormControlLabel
                value='ResidencePermit'
                control={<Radio />}
                label='Вид на жительство'
              />
              <FormControlLabel
                value='TRP'
                control={<Radio />}
                label='Разрешение на временное проживание'
              />
              <FormControlLabel value='visa' control={<Radio />} label='Виза' />
            </RadioGroup>
          </FormControl>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Серия (если имеется) и номер документа'
              variant='outlined'
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Дата начала срока действия права пребывания (проживания)'
              variant='outlined'
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Дата окончания срока действия права пребывания (проживания)'
              variant='outlined'
              required
            />
          </Box>

          <Typography variant='h5' gutterBottom>
            2. Сведения о деловом профиле
          </Typography>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Цель и предполагаемый характер деловых отношений'
              variant='outlined'
              required
            />
          </Box>
          <Typography variant='h6' gutterBottom>
            Является ли лицо публичным должностным лицом (ПДЛ) (нужное подчеркнуть)
          </Typography>
          <FormControl component='fieldset' sx={{ mb: 3 }} required>
            <RadioGroup row>
              <FormControlLabel value='Yes' control={<Radio />} label='Да' />
              <FormControlLabel value='No' control={<Radio />} label='Нет' />
            </RadioGroup>
            <Typography>Если является ПДЛ, заполняется анкета ПДЛ</Typography>
          </FormControl>

          <Typography variant='h6' gutterBottom>
            Сведения о наличии у лица бенефициарного владельца (нужное подчеркнуть)
          </Typography>

          <FormControl component='fieldset' sx={{ mb: 3 }} required>
            <RadioGroup row>
              <FormControlLabel value='Have' control={<Radio />} label='Имеется' />
              <FormControlLabel value='DoNotHave' control={<Radio />} label='Не имеется' />
            </RadioGroup>
            <Typography>Если имеется, заполняется анкета бенефициарного владельца</Typography>
          </FormControl>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Сведения о документах, подтверждающих полномочия по распоряжению денежными средствами или имуществом (согласно карточке образцов подписей)'
              variant='outlined'
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              name='bankName'
              label='Название банка ИП'
              variant='outlined'
              required
              value={surveyData.bankName}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              name='bic'
              label='БИК'
              variant='outlined'
              required
              value={surveyData.bic}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              name='bankAccount'
              label='Расчетный счет'
              variant='outlined'
              required
              value={surveyData.bankAccount}
              onChange={handleChange}
            />
          </Box>

          <Typography variant='h5' gutterBottom sx={{ mt: 4 }}>
            2.1. Заполняется только для индивидуального предпринимателя
          </Typography>

          <Typography variant='h6' gutterBottom sx={{ mt: 4 }}>
            Сведения о регистрации в качестве индивидуального предпринимателя:
          </Typography>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Дата регистрации'
              type='date'
              InputLabelProps={{ shrink: true }}
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Государственный регистрационный номер'
              variant='outlined'
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Наименование регистрирующего органа'
              variant='outlined'
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='Место регистрации' variant='outlined' required />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='Код УГНС' variant='outlined' required />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='ОКПО' variant='outlined' required />
          </Box>

          <Typography variant='h6' gutterBottom sx={{ mt: 4 }}>
            Сведения о патенте или лицензии:
          </Typography>

          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='Вид патента или лицензии' variant='outlined' required />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='Номер патента или лицензии' variant='outlined' required />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Дата выдачи патента или лицензии'
              type='date'
              InputLabelProps={{ shrink: true }}
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Кем выдан патент или лицензия'
              variant='outlined'
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Срок действия патента или лицензии'
              variant='outlined'
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Перечень видов разрешенной или лицензируемой деятельности'
              variant='outlined'
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='Код УГНС' variant='outlined' required />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField fullWidth label='ОКПО' variant='outlined' required />
          </Box>

          <Typography variant='h5' gutterBottom>
            3. Информация о верификации, проверке и уровне риска (заполняется финансовым учреждением
            и нефинансовой категорией лиц)
          </Typography>

          <Typography variant='h6' gutterBottom>
            Сведения о проведении верификации и о результатах верификации (нужное подчеркнуть)
          </Typography>
          <FormControl component='fieldset' sx={{ mb: 3 }} required>
            <RadioGroup row>
              <FormControlLabel value='CarriedOut' control={<Radio />} label='Проведена' />
              <FormControlLabel value='NotCarriedOut' control={<Radio />} label='Не проведена' />
              <FormControlLabel value='OtherNote' control={<Radio />} label='Иное примечание' />
            </RadioGroup>
            <TextField
              fullWidth
              label='Дата проведения'
              type='date'
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
          <Typography variant='h6' gutterBottom>
            1. Сведения о проверке в Санкционных перечнях и о результатах проверки (нужное
            подчеркнуть)
          </Typography>
          <Typography variant='h6' gutterBottom>
            2. Сведения о проверке в Перечне лиц, групп и организаций, в отношении которых имеются
            сведения об их участии в легализации (отмывании) преступных доходов, и о результатах
            проверки (нужное подчеркнуть)
          </Typography>
          <Typography variant='h6' gutterBottom>
            3. Сведения о проверке клиента в Перечне физических лиц, отбывших наказание за
            осуществление легализации (отмывания) преступных доходов, террористической или
            экстремистской деятельности, а также за финансирование данной деятельности, и о
            результатах проверки (нужное подчеркнуть)
          </Typography>
          <FormControl component='fieldset' sx={{ mb: 3 }} required>
            <RadioGroup row>
              <FormControlLabel
                value='NotInTheList'
                control={<Radio />}
                label='Отсутствует в Перечне'
              />
              <FormControlLabel
                value='InTheList'
                control={<Radio />}
                label='Присутствует в Перечне'
              />
            </RadioGroup>
            <TextField
              fullWidth
              label='Дата и время проверки:'
              type='date'
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
          <Typography variant='h6' gutterBottom>
            Степень (уровень) риска (нужное подчеркнуть)
          </Typography>
          <FormControl component='fieldset' sx={{ mb: 3 }} required>
            <RadioGroup row>
              <FormControlLabel value='HighRisk' control={<Radio />} label='Высокий риск' />
              <FormControlLabel value='LowRisk' control={<Radio />} label='Низкий риск' />
            </RadioGroup>
          </FormControl>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Обоснование оценки степени (уровня) риска (по критериям высокого риска)'
              variant='outlined'
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Дата заполнения или последнего обновления сведений, изложенных в анкете (в случае отсутствия существенных изменений и дополнений в анкете, новая анкета не заполняется)'
              type='date'
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label='Дата очередного обновления сведений, изложенных в анкете (на основе результата оценки риска)'
              type='date'
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant='h6' gutterBottom>
              Дата занесения в базу данных информации, указанной в настоящей анкете, и ФИО
              ответственного сотрудника Общества
            </Typography>
            <TextField
              fullWidth
              label='Дата:'
              type='date'
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 1 }}
              required
            />
            <TextField fullWidth label='ФИО:' variant='outlined' required />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant='h6' gutterBottom>
              Дата проведения верификации и ФИО ответственного сотрудника Общества
            </Typography>
            <TextField
              fullWidth
              label='Дата:'
              type='date'
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 1 }}
              required
            />
            <TextField fullWidth label='ФИО:' variant='outlined' required />
          </Box>

          <Box>
            <Typography variant='body1'>Настоящим я,</Typography>

            <TextField
              fullWidth
              placeholder='ФИО / представителя'
              variant='outlined'
              size='small'
              required
            />

            <Typography variant='body1' align='justify'>
              подтверждаю достоверность данных, указанных в настоящей анкете.
            </Typography>

            <Typography variant='body1' align='justify' sx={{ mt: 2 }}>
              В соответствии с требованиями Закона Кыргызской Республики "Об информации
              персонального характера" даю согласие на обработку персональных данных в целях
              выполнения требований законодательства Кыргызской Республики в сфере противодействия
              финансированию террористической деятельности и легализации (отмыванию) преступных
              доходов.
            </Typography>
          </Box>

          <Button type='submit' variant='contained' size='large'>
            Далее
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Survey;
