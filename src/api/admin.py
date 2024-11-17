  
import os
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from .models import db, User, Product, Category, Order, OrderItem, ShoppingCart, CartItem, Payment  

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    # Agrega todos tus modelos aquí
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Product, db.session))
    admin.add_view(ModelView(Category, db.session))
    admin.add_view(ModelView(Order, db.session))
    admin.add_view(ModelView(OrderItem, db.session))
    admin.add_view(ModelView(ShoppingCart, db.session))
    admin.add_view(ModelView(CartItem, db.session))
    admin.add_view(ModelView(Payment, db.session))