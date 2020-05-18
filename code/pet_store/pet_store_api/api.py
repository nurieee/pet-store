from .models import Pet, Product
from .serializers import UserSerializer, PetSerializer, ProductSerializer
from rest_auth.views import LoginView, APIView
from rest_framework import generics, permissions
from django.contrib.auth.models import User


class ULoginView(LoginView):

    def get_response(self):
        orginal_response = super().get_response()
        user_data ={'user': UserSerializer(self.user).data}
        orginal_response.data.update(user_data)

        return orginal_response


class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class PetList(generics.ListCreateAPIView):
    serializer_class = PetSerializer
    queryset = Pet.objects.all()


class ProductList(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        cat = self.request.GET.get('c', None)
        animal = self.request.GET.get('a', None)
        if cat == 'all':
            cat = None
        if animal == 'all':
            animal = None

        params = {'category': cat, 'animal': animal}
        filters = {k: v for k, v in params.items() if v is not None}

        if not cat and not animal:
            query = Product.objects.all()
        else:
            query = Product.objects.filter(**filters)

        return query

class ProductDetails(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class UserView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
